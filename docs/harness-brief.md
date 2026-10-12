# Follow-up Brief — Verify the Formatting Gate

Written before this follow-up implementation on 2026-10-12.
The original retrospective brief remains disclosed in brief.md.

## Goal

Prove that the existing formatting gate accepts compliant LF and CRLF files and fails on each forbidden formatting issue. Do not change cartTotal behaviour or add dependencies.

## Permitted Changes

- Add `test/format.test.js`.
- Update the stale implementation comment in `src/cart.js`.
- Update the historical test comment in `test/cart.test.js`.
- Append this task and observed outcomes to `AI-LOG.md`.
- Include the supplied self-assessment report.

## Contract and Acceptance Criteria

Invoke the existing checker in isolated temporary projects using the current Node executable. Each temporary project must contain src, test, and scripts directories. Remove fixtures after each test.

Use separate tests for:

1. Valid LF formatting: exit status 0.
2. Valid CRLF formatting: exit status 0.
3. Missing final newline: nonzero exit status and corresponding diagnostic.
4. Tab character: nonzero exit status and corresponding diagnostic.
5. Trailing whitespace: nonzero exit status and corresponding diagnostic.

Do not modify the checker to hide a failure, change expected outcomes to match faulty behaviour, or install third-party tooling.

## Validation

Run `npm run check`. Expected test inventory: 12 cart tests and 5 gate tests. Confirm the final GitHub Actions run separately after pushing; local success is not a claim of remote CI success.
