// Import functions to be tested
import {
  addToCart,
  getCartItemCount,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart,
} from "../cart"

describe('Shopping Cart Functionality Tests', () => {
	beforeEach(() => {
		clearCart()
	})

	// Test: Adding a new product increases the cart count
	test('addToCart should add a new product to the cart', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Water Gun', price: 40 }

		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	// Test: Item count increases after adding product
	test('getCartItemCount should reflect the correct number of items in the cart', () => {
		expect(getCartItemCount()).toBe(0)

		const input = { id: 1002, name: "Water Gun", price: 40 }
		addToCart(input)
		expect(getCartItemCount()).toBe(1)
	})

	// Test: getItem returns the correct product from the cart
	test('getItem should return the correct product object from the cart by index', () => {
		const input1 = { id: 1002, name: "Banana", price: 10 }
		const input2 = { id: 1010, name: "Mango", price: 40 }
		addToCart(input1)
		addToCart(input2)
		const expectedItem = { id: 2002, amount: 1, item: input1 }

		const item1 = getItem(0)

		expect(item1).toEqual(expectedItem)
	})

	// Test: Total value of cart matches sum of item prices
	test('getTotalCartValue should return the correct total of all items in the cart', () => {
		const input = [
			{ id: 1002, name: "Banana", price: 10 },
			{ id: 1010, name: "Mango", price: 40 },
			{ id: 1025, name: "Avocado", price: 80 }
		]
		let expectedTotal = 0
		input.forEach(item => {
			addToCart(item)
			expectedTotal += item.price
		})

		expect(getTotalCartValue()).toBe(expectedTotal)
	})

	// Test: Removing a product decreases item count
	test('removeFromCart should remove a product by cart item id', () => {
		const input1 = { id: 1002, name: "Banana", price: 10 }
		const input2 = { id: 1010, name: "Mango", price: 40 }
		addToCart(input1)
		addToCart(input2)

		const countBefore = getCartItemCount()
		const cartItemIdToRemove = 2002
		removeFromCart(cartItemIdToRemove)
		const countAfter = getCartItemCount()

		expect(countAfter).toBe(countBefore - 1)
	})

	// Test: Editing an item quantity updates the total value
	test('editCart should update the quantity of a product in the cart', () => {
		const input1 = { id: 1002, name: "Banana", price: 10 }
		const input2 = { id: 1010, name: "Mango", price: 40 }
		addToCart(input1)
		addToCart(input2)

		const totalBefore = getTotalCartValue()
		const cartItemIdToEdit = 2003 // id for the second added item
		editCart(cartItemIdToEdit, 2) // change quantity to 2
		const totalAfter = getTotalCartValue()

		expect(totalAfter).toBe(totalBefore + input2.price)
	})

	// Test: Clearing the cart resets item count to 0
	test('clearCart should remove all items from the cart', () => {
		const input = [
			{ id: 1002, name: "Banana", price: 10 },
			{ id: 1010, name: "Mango", price: 40 },
			{ id: 1025, name: "Avocado", price: 80 }
		]
		input.forEach(item => addToCart(item))

		clearCart()
		expect(getCartItemCount()).toBe(0)
	})
})
