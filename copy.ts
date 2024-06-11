
/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */


type Pizza = {
  name: string,
  price: number
}

type Order = {
  pizza: Pizza,
  id: number,
  status: string
}

const menu = [
  {name: "Margherita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9},
]

let nextOrderId: number = 1
let cashInRegister: number = 100
const orderQueue = []

function addNewPizza(pizza: Pizza) {
  menu.push(pizza)
} 


function placeOrder(pizzaName: string) {
  const pizzaObject = menu.find((item) => item.name === pizzaName)
  if (!pizzaObject) {
    console.error(`${pizzaName} does not exist in the menu`)
    return
  }
  cashInRegister += pizzaObject.price
  const pizzaOrder: Order = {
    pizza: pizzaObject,
    id: nextOrderId,
    status: "ordered"
  }
  nextOrderId++
  orderQueue.push(pizzaOrder)
  console.log('pizzaOrder: ', pizzaOrder)
  return pizzaOrder
}


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


addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)