import { isCartItem, isProduct } from "./validation.js"

/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester
*/

// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

let cart = [] // The cart array stores all cart items
let idCounter = 2002 // Start from this ID and increase every time

// -------------------------------------------------- //
// Din kod börjar här
// Du får en funktion att börja med

// Function to return the number of items in the cart.
function getCartItemCount() {
  // Return how many items in the cart
  return cart.length
}

// Function to return the cart item (at the position index).
function getItem(index) {
  // Get the item from the given position (0, 1, 2...)
  return cart[index]
}

// Function to calculate the total price of all items in the cart.
function getTotalCartValue() {
  let total = 0 // Total price start at 0
  // Loop for all items in the cart (from 0 to cart length)
  for (let i = 0; i < cart.length; i++) {
    // Multiply item price by quantity, then add it to total
    total += cart[i].item.price * cart[i].amount
  }
  return total
}

// Function for checking if the product is valid.
function addToCart(newItem) {
  // Check if the new item is a valid product
  if (!isProduct(newItem)) {
    return false
  }

  // Check if this product already exists in cart
  const existingIndex = cart.findIndex((cartItem) => cartItem.item.id === newItem.id)

  if (existingIndex !== -1) {
    // If exists, increase the amount
    cart[existingIndex].amount += 1
  } else {
    // If not, create a new cart item
    const cartItem = { id: idCounter, amount: 1, item: newItem }
    idCounter++ // Increase ID for the next item
    cart.push(cartItem)
  }

  return true
}

// Function to remove item from the cart.
function removeFromCart(itemId) {
  // Find items in cart that match the itemId
  const deleteItems = cart.filter((cartItem) => cartItem.id === itemId)

  // Check if no item found
  if (deleteItems.length === 0) {
    return false // If item not in the cart
  } else {
    // Remove the item from the cart
    cart = cart.filter((item) => item.id !== itemId)
    return true // If item successfully removed
  }
}

// Function to update item quantity in the cart.
function editCart(itemId, newAmount) {
  // Check if the new amount is a valid number and greater than 0
  if (typeof newAmount !== "number" || isNaN(newAmount) || newAmount <= 0) {
    return false
  }

  // Find the item by id
  const selectedIndex = cart.findIndex((cartItem) => cartItem.id === itemId)

  // If found, update the quantity
  if (selectedIndex !== -1) {
    cart[selectedIndex].amount = newAmount
    return true
  }

  return false // If item not found
}

// Function to clear all items in the cart.
function clearCart() {
  cart = [] // Empty the cart
  idCounter = 2002 // Reset the idCounter to starting value
}

// Export functions so we can test them
export {
  getCartItemCount,
  addToCart,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart,
}
