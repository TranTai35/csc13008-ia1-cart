import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

let failed = false

function checkDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) {
      checkDirectory(path)
      continue
    }

    if (!entry.name.endsWith('.js')) {
      continue
    }

    const content = readFileSync(path, 'utf8')
    const lines = content.split(/\r?\n/)

    for (const [index, line] of lines.entries()) {
      if (/\t/.test(line) || /[ \t]+$/.test(line)) {
        console.error(`${path}:${index + 1}: tab or trailing whitespace`)
        failed = true
      }
    }

    if (!content.endsWith('\n')) {
      console.error(`${path}: missing final newline`)
      failed = true
    }
  }
}

for (const directory of ['src', 'test', 'scripts']) {
  checkDirectory(directory)
}

if (failed) {
  process.exitCode = 1
} else {
  console.log('Basic formatting checks passed')
}
