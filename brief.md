# Implementation Brief — CSC13008 IA#1

## 1. Purpose and Timing

Implement `cartTotal(items, options)` according to the starter README and verify it with independent, specification-based tests.

The original requirements were discussed with ChatGPT before implementation, but this complete written brief was assembled afterwards. The boundary-test follow-up was documented separately in section 10 before the reported application of those tests. This revised document clarifies the contract; it does not change that timeline.

## 2. Stack and Scope

- Plain JavaScript, ES modules, and Node.js.
- Use built-in `node:test` and `node:assert/strict`.
- No external dependencies.
- Implementation changes may touch only `src/cart.js` and `test/cart.test.js`.
- Preserve the exported name and signature: `cartTotal(items, options)`.
- Preserve the starter's worked-example test.
- Project rules, formatting checks, CI, and documentation are separate tasks.

## 3. Inputs

| Input | Meaning |
|---|---|
| `items` | Array of `{ name, price, qty }` objects |
| `name` | Product label; does not affect the calculation |
| `price` | Unit price |
| `qty` | Quantity; must be a positive integer |
| `options.vatRate` | VAT rate expressed as a fraction, e.g. `0.08` for 8% |
| `options.freeShipFrom` | Subtotal at which shipping becomes free |
| `options.shipFee` | Shipping fee below that threshold |

Use the supplied options. Do not invent default values or extra input-validation requirements absent from the README.

## 4. Calculation and Return Contract

1. If `items` is empty, return the number `0` with no VAT or shipping.
2. Validate every item's price and quantity according to section 5.
3. Calculate `subtotal` as the sum of `price * qty`.
4. Calculate VAT as `subtotal * options.vatRate`.
5. Shipping is `0` when `subtotal >= options.freeShipFrom`; otherwise it is `options.shipFee`.
6. Round the final sum `subtotal + VAT + shipping` to the nearest whole dong and return a JavaScript number.

Determine shipping eligibility from the subtotal before VAT. Round the final sum, rather than rounding each item's value or VAT separately.

## 5. Error Contract

Throw `RangeError` if any item has:

- A negative price.
- A quantity that is not a positive integer, including fractional, zero, or negative quantities.

Do not silently clamp, coerce, skip, or correct these invalid values. Validate every item, rather than only the first one.

## 6. Worked Example

| Component | Value |
|---|---:|
| Items | `2 * 180000 + 1 * 45000` |
| Subtotal | `405000` |
| VAT at `0.08` | `32400` |
| Shipping below threshold `500000` | `30000` |
| Expected numeric total | `467400` |

## 7. Acceptance Tests

Each test should target one behaviour and assert an externally observable result, not implementation internals.

| Case | Expected result |
|---|---|
| Worked example | Number `467400` |
| Empty cart with a nonzero configured shipping fee | Number `0` |
| Subtotal `500000`, VAT `0.08`, threshold `500000` | Number `540000`; free shipping |
| Subtotal `490000`, VAT `0.08`, threshold `500000`, shipping `30000` | Number `559200`; VAT does not qualify the cart for free shipping |
| Negative price | `RangeError` |
| Quantity `1.5` | `RangeError` |
| Quantity `0` | `RangeError` |
| Quantity `-1` | `RangeError` |
| Subtotal `1001`, VAT `0.08`, threshold `1000` | Number `1081` after rounding |
| Subtotal `499999`, VAT `0`, threshold `500000`, shipping `30000` | Number `529999` |
| Subtotal `500001`, VAT `0`, threshold `500000` | Number `500001` |
| Subtotal `1`, VAT `0.5`, threshold `1` | Number `2` after rounding `1.5` |

## 8. Implementation Constraints

- No dependencies, new frameworks, or changes to the function signature.
- Do not use `toFixed()` as the final result because it returns a string.
- Do not change expected test values to accommodate incorrect code.
- Do not modify files outside the implementation scope for this task.
- Prefer clear, readable code that the student can explain.

## 9. Verification and Completion

Run `npm run check`, which runs tests followed by the basic formatting gate. On Windows PowerShell, use `npm.cmd run check` if `npm.ps1` is blocked.

Completion requires:

- All acceptance tests pass.
- The formatting gate passes.
- No external dependencies were added.
- GitHub Actions passes for the final pushed revision.
- AI assistance is documented honestly in `AI-LOG.md`.

A successful local run does not establish the status of the latest GitHub Actions run. Record that status only after checking it.

## 10. Follow-up Task — Boundary Test Coverage

This follow-up task was documented before the reported application of its changes. The original complete written brief remains retrospective.

Scope: modify only `test/cart.test.js`; preserve the implementation and add no dependencies.

Add separate tests for a subtotal one dong below the shipping threshold, a subtotal one dong above it, and a positive final total ending in `.5`.

Validate with `npm run check`, then confirm the updated revision's GitHub Actions result after pushing.

## 11. Documentation Review — 2026-10-12

ChatGPT revised this brief after reviewing the submitted ZIP. The revision adds an input table, explicit final-rounding behaviour, an acceptance-test matrix, and completion criteria. It does not claim that the original complete brief existed before implementation or that the final CI run has been verified.
