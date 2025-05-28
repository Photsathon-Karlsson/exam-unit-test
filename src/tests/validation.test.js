import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
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
/*
// For invalid cases.
const exampleInvalidProduct = {
  id: 1001,
  price: 500,
};

const exampleInvalidCartObject = {
  amount: 1,
  item: exampleProduct,
};
*/
// Group tests using "describe"
describe('Validation', () => {

	// True cases
	// Cases where the functions work correctly and return the expected result.
	describe("True cases", () => {
    // isProduct()
    it("isProduct() should return true for a valid product", () => {
      const result = isProduct(exampleProduct); // The result should be true.
      // console.log("result of isProduct() is ", result);

      expect(result).toBe(true); // Check that result is true.
    });

	// isCartItem()
    it("isCartItem() should return true for a valid cart item", () => {
      const result = isCartItem(exampleCartObject); 
      // console.log("result of isCartItem() is ", result);

      expect(result).toBe(true); 
    });
  });

	// False cases


	//Throw error cases

})

// Använd en "test" eller "it" (de är synonymer) för varje testfall
	/* Exempel på syntax:
	test('beskriv testfallet', () => {
		// här skriver du testkoden
		// avsluta alltid med "expect"
	})
	*/

	// ---------------------------------------------
	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten och du t.ex. vill skriva på svenska i stället för engelska.
	// (Ta bort dessa kommentarer när du är klar)

	// 1. it returns true for a valid cart object
	// 2. it returns false for invalid cart objects

	// 3. it returns true for a valid product
	// 4. it returns false for invalid cart objects