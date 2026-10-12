# Implementation Brief — CSC13008 IA#1

## 1. Documentation Note

This brief was documented after implementation, based on the starter
specification and the requirements discussed with ChatGPT. It was not
saved as a complete brief before code generation.

## 2. Task

Implement `cartTotal(items, options)` and add specification-based tests
using plain JavaScript with no external dependencies.

## 3. Permitted Files

For this implementation task, modify only:

- `src/cart.js`
- `test/cart.test.js`

Preserve the exported function name and signature.
Keep the existing worked-example test.

Project rules, formatting checks, and CI configuration are separate
setup tasks.

## 4. Function Contract

### 4.1. Inputs

`cartTotal(items, options)` accepts:

- `items`: an array of objects containing `name`, `price`, and `qty`.
- `options`: an object containing `vatRate`, `freeShipFrom`, and `shipFee`.

### 4.2. Calculation Rules

1. Calculate the subtotal by summing `price * qty` for each item.
2. Calculate VAT as `subtotal * vatRate`.
3. Set shipping to `0` when `subtotal >= freeShipFrom`;
   otherwise use `shipFee`.
4. Return `subtotal + VAT + shipping`, rounded to the nearest whole dong.

Shipping eligibility must be determined using the subtotal before VAT.

### 4.3. Return Value

The return value must be a JavaScript number.

### 4.4. Empty Cart

An empty cart must return `0`, without VAT or shipping charges.

## 5. Error Cases

Throw `RangeError` when:

- An item's price is negative.
- An item's quantity is not a positive integer, including fractional,
  zero, and negative quantities.

Do not silently correct invalid values.

## 6. Worked Example

### 6.1. Items

- Two items priced at `180000` each.
- One item priced at `45000`.

### 6.2. Options

- `vatRate`: `0.08`
- `freeShipFrom`: `500000`
- `shipFee`: `30000`

### 6.3. Expected Calculation

- Subtotal: `405000`
- VAT: `32400`
- Shipping: `30000`
- Total: `467400`

## 7. Acceptance Criteria

Tests must independently verify:

- The worked example returns the number `467400`.
- An empty cart returns `0`.
- Shipping is free at exactly the threshold.
- VAT does not count toward the free-shipping threshold.
- A negative price throws `RangeError`.
- Fractional, zero, and negative quantities throw `RangeError`.
- The total is rounded to the nearest whole dong.

Tests must assert the specification rather than internal
implementation details.

## 8. Constraints

- Use the existing ES module structure.
- Use the built-in `node:test` and `node:assert/strict` modules.
- Do not add external dependencies.
- Do not change expected results merely to make tests pass.
- Do not use `toFixed` as the final return value because it returns
  a string.
- Do not add requirements that are absent from the starter specification.

## 9. Validation

### 9.1. Standard Commands

- `npm test`
- `npm run check`

### 9.2. Windows PowerShell

Use `npm.cmd` if `npm.ps1` is blocked:

- `npm.cmd test`
- `npm.cmd run check`

## 10. Follow-up Task — Boundary Test Coverage

This follow-up task is documented before applying the changes below.
The original implementation brief remains retrospective.

### Scope

Modify only `test/cart.test.js`.
Do not change the function implementation or add dependencies.

### Required Tests

- A subtotal one dong below the threshold must include shipping.
- A subtotal one dong above the threshold must receive free shipping.
- A positive total ending in .5 must round up to the next whole dong.

### Validation

Run `npm run check` locally and confirm that CI passes after pushing.
