// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat
//-------------------------------------------------------------------//

// All 3 properties must not be undefined, & id and amount must be numbers, & item must be an object.
// Check item is a product. If it's a product then return true.
// If it's not a product, then return false.
function isCartItem(maybeCartItem) {
   if (maybeCartItem.id && maybeCartItem.amount && maybeCartItem.item) {
    // Check if it has all properties.
    if (
      typeof maybeCartItem.id === "number" &&
      typeof maybeCartItem.amount === "number" &&
      typeof maybeCartItem.item === "object"
    ) {
      // Check if the properties have the correct types.
      if (
        maybeCartItem.item.id &&
        maybeCartItem.item.name &&
        maybeCartItem.item.price &&
        typeof maybeCartItem.item.id === "number" &&
        typeof maybeCartItem.item.name === "string" &&
        typeof maybeCartItem.item.price === "number"
      ) {
        // Check if item has all properties & correct types.
        return true;
      } else {
        // If item is invalid (missing properties or incorrect types).
        return false;
      }
    } else {
      // If the properties have incorrect types.
      return false;
    }
    } else {
        // If properties are missing.
        return false;
    } 
}

// All 3 properties must not be undefined, id and price = numbers, name = string, in order to return true.
// If not, return false.
function isProduct(maybeProduct) {
    if (maybeProduct.id && maybeProduct.name && maybeProduct.price) {
    // Check if it has all properties.
    if (
      typeof maybeProduct.id === "number" &&
      typeof maybeProduct.name === "string" &&
      typeof maybeProduct.price === "number"
    ) {
      // Check if item has all properties & correct types.
      return true;
    } else {
      // If the properties have incorrect types.
      return false;
    }
  } else {
    // If properties are missing.
    return false;
  }
}

export { isCartItem, isProduct }
