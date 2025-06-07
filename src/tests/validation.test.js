import { isCartItem, isProduct } from "../validation.js"

// Valid examples for testing
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Invalid examples for testing
const exampleInvalidProduct = {
	id: 1001, // Missing 'name'
	price: 500
}

const exampleInvalidCartObject = {
	amount: 1, // Missing 'id'
	item: exampleProduct
}

// Group all validation-related tests
describe('Validation functions for product and cart item objects', () => {

	// Test cases where validation should return true
	describe("Returns true for valid input", () => {

		it("isProduct() should return true when the input is a valid product object", () => {
			const result = isProduct(exampleProduct) // Valid product structure
			expect(result).toBe(true)
		})

		it("isCartItem() should return true when the input is a valid cart item object", () => {
			const result = isCartItem(exampleCartObject) // Valid cart item structure
			expect(result).toBe(true)
		})
	})

	// Test cases where validation should return false
	describe("Returns false for invalid input", () => {

		it("isProduct() should return false when required product fields are missing", () => {
			const result = isProduct(exampleInvalidProduct) // Missing 'name'
			console.log("Result of invalid isProduct():", result)
			expect(result).toBe(false)
		})

		it("isCartItem() should return false when required cart item fields are missing", () => {
			const result = isCartItem(exampleInvalidCartObject) // Missing 'id'
			console.log("Result of invalid isCartItem():", result)
			expect(result).toBe(false)
		})
	})

	// Test cases where the function should throw an error due to missing input
	describe("Throws an error for missing or undefined input", () => {

		it("isProduct() should throw an error when no input is provided", () => {
			expect(() => isProduct()).toThrow() // No argument passed
		})

		it("isCartItem() should throw an error when no input is provided", () => {
			expect(() => isCartItem()).toThrow() // No argument passed
		})
	})
})
