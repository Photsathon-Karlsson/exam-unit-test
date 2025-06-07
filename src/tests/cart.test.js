import {
  addToCart,
  getCartItemCount,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart
} from "../cart"

// Group all tests together
describe("Cart Functionality", () => {

  // Clear cart before each test to make sure test is isolated
  beforeEach(() => {
    clearCart()
  })

  // Test addToCart with a valid product
  test("addToCart should add an item", () => {
    const product = { id: 1, name: "Ball", price: 50 }
    addToCart(product)
    expect(getCartItemCount()).toBe(1)
  })

  // Test getCartItemCount
  test("getCartItemCount should return correct count", () => {
    expect(getCartItemCount()).toBe(0)
    addToCart({ id: 1, name: "Ball", price: 50 })
    addToCart({ id: 2, name: "Bat", price: 100 })
    expect(getCartItemCount()).toBe(2)
  })

  // Test getItem returns correct item
  test("getItem should return correct item by index", () => {
    const product = { id: 1, name: "Ball", price: 50 }
    addToCart(product)
    const item = getItem(0)
    expect(item.item).toEqual(product)
    expect(item.amount).toBe(1)
  })

  // Test total value is correct
  test("getTotalCartValue should return total price", () => {
    addToCart({ id: 1, name: "Ball", price: 10 })
    addToCart({ id: 2, name: "Bat", price: 90 })
    expect(getTotalCartValue()).toBe(100)
  })

  // Test removeFromCart removes item
  test("removeFromCart should remove item", () => {
    const product = { id: 1, name: "Ball", price: 10 }
    addToCart(product)
    const item = getItem(0)
    removeFromCart(item.id)
    expect(getCartItemCount()).toBe(0)
  })

  // Test editCart updates quantity
  test("editCart should update quantity", () => {
    const product = { id: 1, name: "Ball", price: 20 }
    addToCart(product)
    const item = getItem(0)
    editCart(item.id, 3)
    const updatedItem = getItem(0)
    expect(updatedItem.amount).toBe(3)
    expect(getTotalCartValue()).toBe(60)
  })

  // Test clearCart clears all items
  test("clearCart should empty the cart", () => {
    addToCart({ id: 1, name: "Ball", price: 10 })
    addToCart({ id: 2, name: "Bat", price: 20 })
    clearCart()
    expect(getCartItemCount()).toBe(0)
  })

  // Test: editCart with invalid quantity (zero)
  test("editCart should ignore 0 quantity", () => {
    const product = { id: 3, name: "Helmet", price: 30 }
    addToCart(product)
    const item = getItem(0)
    editCart(item.id, 0)
    expect(item.amount).toBe(1) // should stay the same
  })

  // Test: editCart with invalid quantity (negative)
  test("editCart should ignore negative quantity", () => {
    const product = { id: 4, name: "Gloves", price: 15 }
    addToCart(product)
    const item = getItem(0)
    editCart(item.id, -2)
    expect(item.amount).toBe(1)
  })

  // Test: editCart with invalid quantity (non-number)
  test("editCart should ignore non-number quantity", () => {
    const product = { id: 5, name: "Shoes", price: 60 }
    addToCart(product)
    const item = getItem(0)
    editCart(item.id, "two")
    expect(item.amount).toBe(1)
  })

  // Test: getItem returns undefined for invalid index
  test("getItem should return undefined for out-of-range index", () => {
    expect(getItem(99)).toBeUndefined()
  })

  // Test: removeFromCart with invalid ID should not crash
  test("removeFromCart should do nothing for non-existent ID", () => {
    addToCart({ id: 6, name: "Net", price: 40 })
    expect(() => removeFromCart(9999)).not.toThrow()
    expect(getCartItemCount()).toBe(1)
  })
})
