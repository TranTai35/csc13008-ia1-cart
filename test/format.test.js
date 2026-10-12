import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const checker = fileURLToPath(new URL('../scripts/check-format.js', import.meta.url))

function runChecker(content) {
  const directory = mkdtempSync(join(tmpdir(), 'ia1-format-'))

  try {
    for (const name of ['src', 'test', 'scripts']) {
      mkdirSync(join(directory, name))
    }

    writeFileSync(join(directory, 'src', 'sample.js'), content)

    const result = spawnSync(process.execPath, [checker], {
      cwd: directory,
      encoding: 'utf8',
    })

    if (result.error) {
      throw result.error
    }

    return result
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}

test('format gate accepts compliant LF files', () => {
  const result = runChecker('const value = 1\n')
  assert.equal(result.status, 0, result.stderr)
})

test('format gate accepts compliant CRLF files', () => {
  const result = runChecker('const value = 1\r\n')
  assert.equal(result.status, 0, result.stderr)
})

test('format gate rejects a missing final newline', () => {
  const result = runChecker('const value = 1')
  assert.equal(result.status, 1)
  assert.match(result.stderr, /missing final newline/)
})

test('format gate rejects a tab character', () => {
  const result = runChecker('\tconst value = 1\n')
  assert.equal(result.status, 1)
  assert.match(result.stderr, /tab or trailing whitespace/)
})

test('format gate rejects trailing whitespace', () => {
  const result = runChecker('const value = 1 \n')
  assert.equal(result.status, 1)
  assert.match(result.stderr, /tab or trailing whitespace/)
})
