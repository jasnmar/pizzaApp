const menu = [
  {name: "Margherita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9},
]

let nextOrderId: number = 1
let cashInRegister: number = 100
const orderQueue = []

function addNewPizza(pizza) {
  menu.push(pizza)
} 


function placeOrder(pizzaName) {
  const pizzaObject = menu.find((item) => item.name === pizzaName)
  if (!pizzaObject) {
    console.error(`${pizzaName} does not exist in the menu`)
    return
  }
  cashInRegister += pizzaObject.price
  pizzaObject.status = "ordered"
  pizzaObject.id = nextOrderId
  nextOrderId++
  orderQueue.push(pizzaObject)
  console.log('pizzaObject: ', pizzaObject)
  return pizzaObject
}

/**
 * Challenge: Teach TS what data type should be used for the 
 * orderId in the completeOrder function. Then check for any
 * additional warnings TS comes up with and fix those.
 */

function completeOrder(orderId: number) {
  const completedOrder = orderQueue.find((order) => order.id === orderId)
  if(!completedOrder) {
    console.error(`${completeOrder} was not found in the queue`)
    return
  }
  completedOrder.status = "completed"
  console.log('completedOrder: ', completedOrder)
  return completeOrder
}


addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)