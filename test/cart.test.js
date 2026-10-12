import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// The original starter example; it failed before implementation.
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

test('shipping is charged one dong below the threshold', () => {
  const items = [
    { name: 'Boundary item', price: 499999, qty: 1 },
  ]
  const options = {
    vatRate: 0,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 529999)
})

test('shipping is free one dong above the threshold', () => {
  const items = [
    { name: 'Boundary item', price: 500001, qty: 1 },
  ]
  const options = {
    vatRate: 0,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 500001)
})

test('a positive total ending in .5 rounds up', () => {
  const items = [
    { name: 'Rounding item', price: 1, qty: 1 },
  ]
  const options = {
    vatRate: 0.5,
    freeShipFrom: 1,
    shipFee: 30000,
  }

  assert.equal(cartTotal(items, options), 2)
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
