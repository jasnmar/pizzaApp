const menu = [
  {name: "Margherita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9},
]

let nextOrderId = 1
let cashInRegister = 100
const orderQueue = []

function addNewPizza(pizza) {
  menu.push(pizza)
} 


function placeOrder(pizzaName) {
  const pizzaObject = menu.find((item) => item.name === pizzaName)
  cashInRegister += pizzaObject.price
  pizzaObject.status = "ordered"
  pizzaObject.id = nextOrderId
  nextOrderId++
  orderQueue.push(pizzaObject)
  console.log('pizzaObject: ', pizzaObject)
  return pizzaObject
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
  const completedOrder = orderQueue.find((order) => order.id === orderId)
  completedOrder.status = "completed"
  console.log('completedOrder: ', completedOrder)
  return completeOrder
}



placeOrder("Pepperoni")
completeOrder(1)