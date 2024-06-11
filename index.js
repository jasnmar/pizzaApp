const menu2 = [
  {name: "Margherita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9},
]

let nextOrderId2 = 1
let cashInRegister2 = 100
const orderQueue2 = []

function addNewPizza2(pizza) {
  menu.push(pizza)
} 


function placeOrder2(pizzaName) {
  const pizzaObject = menu.find((item) => item.name === pizzaName)
  console.log('pizzaObject: ', pizzaObject)
  console.log('cashInRegister: ', cashInRegister)
  cashInRegister += eval(pizzaObject.price)
  console.log('cashInRegister: ', cashInRegister)
  console.log('pizzaObject.price: ', pizzaObject.price)
  pizzaObject.status = "ordered"
  pizzaObject.id = nextOrderId
  nextOrderId++
  orderQueue.push(pizzaObject)
  console.log('pizzaObject: ', pizzaObject)
  return pizzaObject
}

function completeOrder2(orderId) {
  const completedOrder = orderQueue.find((order) => order.id === orderId)
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