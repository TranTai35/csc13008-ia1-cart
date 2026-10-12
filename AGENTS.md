# Project rules

## Stack
- Plain JavaScript using ES modules.
- Node.js with the built-in node:test runner.
- No external dependencies.

## Files
- src/cart.js: implements cartTotal.
- test/cart.test.js: tests the specification.
- scripts/check-format.js: checks basic formatting rules.

## Commands
- npm test: run the tests.
- npm run format:check: check formatting.
- npm run check: run both checks.
- On Windows PowerShell, use npm.cmd instead of npm if scripts are blocked.

## Contract
- Calculate shipping eligibility from the subtotal before VAT.
- Return a number rounded to the nearest whole dong.
- An empty cart returns zero.
- Negative prices and quantities that are not positive integers
  must throw RangeError.

## Never
- Never add external dependencies.
- Never change expected test results just to make failing code pass.
- Never return a string from cartTotal.

## Before submission
- Run npm run check.
- Update AI-LOG.md honestly.
- Include evidence in SELF_ASSESSMENT_REPORT.md.