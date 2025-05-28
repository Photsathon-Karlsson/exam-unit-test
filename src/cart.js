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

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //
// Din kod börjar här
// Du får en funktion att börja med

// Function to return the number of items in the cart.
function getCartItemCount() {
	// throw new Error('TODO') 
	return cart.length
}

// Function to return the cart item (at the position index).
function getItem(index) {
  return cart[index]
}

// Function to calculate the total price of all items in the cart.
function getTotalCartValue() {
  let total = 0 // Total price start at 0.
  // Loop for all items in the cart (from 0 to cart length). 
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].item.price * cart[i].amount // Multiply item price by quantity, then add it to total.
  }
  return total
}

// Function for checking if the product is valid.
function addToCart(newItem) {
  if (!isProduct(newItem)) {
    return false
  }

  const cartItem = { id: idCounter, amount: 1, item: newItem }
  idCounter++
  cart.push(cartItem)
}

// Function to remove item from the cart. 
function removeFromCart(itemId) { // Create function & takes itemId as input.
  const deleteItems = cart.filter((cartItem) => cartItem.id === itemId) // Find items in cart that match the itemId.
  // Check if no item found :
  if (deleteItems.length === 0) {
    return false // if item not in the cart.
  } else {
    cart = cart.filter((item) => item.id !== itemId) // Remove the item from the cart.
    return true // if item successfully removed.
  }
}

// Function to update item quantity in the cart.
function editCart(itemId, newValues) { // Taking 2 inputs: item's ID & the new item that want to edit.	
	const selectedItem = cart.filter((cartItem) => cartItem.id === itemId) // Checks the cart for matching items & stores them in an array (selectedItem).
  	selectedItem.forEach((cartItem) => { // Loop goes through every item in selectedItem.
	cartItem.amount = newValues // Updates the item’s quantity.
  })
}

// Function to clear all items in the cart.
function clearCart() {
  cart = []
  idCounter = 2002 // Reset the idCounter to 2002.
}

export {
  getCartItemCount,
  addToCart,
  getItem,
  getTotalCartValue,
  removeFromCart,
  editCart,
  clearCart,
}
