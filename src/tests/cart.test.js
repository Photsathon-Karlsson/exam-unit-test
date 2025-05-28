// importera här
import {
  addToCart,
  getCartItemCount,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart,
} from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})

	// Skriv dina testfall här
	// Du får ett test att börja med
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	// -------------------------------------------------- //

	// Function to count the total number of items in the cart.
	test("getCartItemCount", () => {
		const itemCountBeforeAdd = getCartItemCount() // Check if the cart is empty
		expect(itemCountBeforeAdd).toBe(0) // Expect the cart to be empty.

		const input = { id: 1002, name: "Vattenpistol", price: 40 }
		addToCart(input) // Add the product.
		const itemCountAfterAdd = getCartItemCount() // Check the new item count.
		expect(itemCountAfterAdd).toBe(itemCountBeforeAdd + 1) // Should increase by 1.
	})

	// Function to get product info using its number (index).
	test("getItem", () => {
		const input1 = { id: 1002, name: "banana", price: 10 }
		const input2 = { id: 1010, name: "mango", price: 40 }
		addToCart(input1)
		addToCart(input2)
		const itemInCart = { id: 2002, amount: 1, item: input1 } // (Data should look like this.)
		const item1 = getItem(0) // Get the product at index 0.

		expect(item1).toEqual(itemInCart) // Check that the data matches by using .toEqual (as .toBe = same reference & use with object/array but .toEqual = same value).
	})

	// Function to calculate the total price of the cart.
	// Function returns the correct total price of all items in the cart.
	// Create 3 new products & to compare the function's result with a total (that already know).
	test("getTotalCartValue", () => {
		const input1 = { id: 1002, name: "banana", price: 10 }
		const input2 = { id: 1010, name: "mango", price: 40 }
		const input3 = { id: 1025, name: "avocado", price: 80 }
		const input = [input1, input2, input3] // Store them in an array.
		let totalValue = 0 // Variable to keep the total price.
		// Loop through each product, add it to the cart, & sum the prices.
		for (let i = 0; i < input.length; i++) {
			addToCart(input[i]) // Add product to the cart.
			totalValue += input[i].price // Add the price to totalValue.
		}
		const totalValueTest = getTotalCartValue() // Get the total price from the function.
		expect(totalValueTest).toBe(totalValue) // Check if it's the same as the calculated total (130).
	})

	// Function to remove a product from the cart.
	test("removeFromCart", () => {
		// Testing remove with new products.
		const input1 = { id: 1002, name: "banana", price: 10 }
		const input2 = { id: 1010, name: "mango", price: 40 }
		// Add products to the cart.
		addToCart(input1) 
		addToCart(input2) 
		const countBeforeRemove = getCartItemCount() // Save the number of items in the cart before removing.
		const starterId = 2002 // Choose a product id (2002) that is not in the cart.
		removeFromCart(starterId) // Remove the product( id 2002) from the cart.
		const countAfterRemove = getCartItemCount() // Save the number of items in the cart after trying to remove.
		expect(countAfterRemove).toBe(countBeforeRemove - 1) // Check that the item count is 1 less than before.
	})

	// Function to edit the quantity & information of an item in the cart.
	test("editCart", () => {
		// Add products in cart.
		const input1 = { id: 1002, name: "banana", price: 10 }
		const input2 = { id: 1010, name: "mango", price: 40 }
		addToCart(input1)
		addToCart(input2)
		// Product ID start from 2002.
		const starterId = 2002
		const totalValueBeforeEdit = getTotalCartValue() // Save the total cart price before changing anything.
		editCart(starterId + 1, 2) // editCart(2003, 2) Update the item ID 2003 in the cart to have 2 items.
		const totalValueAfterEdit = getTotalCartValue() // Save the new total price of the cart after the edit.

		expect(totalValueAfterEdit).toBe(totalValueBeforeEdit + input2.price) // Check if the new total price = old price + 1 mango's price (= it added 1 more mango).
	})



})
 