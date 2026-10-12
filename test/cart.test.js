import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns zero without shipping', () => {
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal([], options), 0)
})

test('shipping is free at exactly the threshold', () => {
  const items = [
    { name: 'Sản phẩm', price: 500000, qty: 1 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 540000)
})

test('VAT does not count toward the free-shipping threshold', () => {
  const items = [
    { name: 'Sản phẩm', price: 490000, qty: 1 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 559200)
})

test('negative price throws RangeError', () => {
  const items = [
    { name: 'Sản phẩm', price: -1000, qty: 1 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(() => cartTotal(items, options), RangeError)
})

for (const qty of [1.5, 0, -1]) {
  test(`quantity ${qty} throws RangeError`, () => {
    const items = [
      { name: 'Sản phẩm', price: 1000, qty },
    ]
    const options = {
      vatRate: 0.08,
      freeShipFrom: 500000,
      shipFee: 30000,
    }

    assert.throws(() => cartTotal(items, options), RangeError)
  })
}

test('total is rounded to the nearest whole dong', () => {
  const items = [
    { name: 'Sản phẩm', price: 1001, qty: 1 },
  ]
  const options = {
    vatRate: 0.08,
    freeShipFrom: 1000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 1081)
})
