
/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */


type Pizza = {
  id: number,
  name: string,
  price: number
}


/**
 * Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */
type Order = {
  pizza: Pizza,
  id: number,
  status: "ordered" | "completed"
}

const menu: Pizza[] = [
  {id:1, name: "Margherita", price: 8},
  {id:2, name: "Pepperoni", price: 10},
  {id:3, name: "Hawaiian", price: 10},
  {id:4, name: "Veggie", price: 9},
]

let nextOrderId: number = 1
let cashInRegister: number = 100
const orderQueue: Order[] = []

function addNewPizza(pizza: Pizza) {
  menu.push(pizza)
} 


function placeOrder(pizzaName: string) {
  const pizzaObject = menu.find((item) => item.name === pizzaName)
  if (!pizzaObject) {
    console.error(`${pizzaName} does not exist in the menu`)
    return false
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
    return false
  }
  completedOrder.status = "completed"
  console.log('completedOrder: ', completedOrder)
  return completeOrder
}


addNewPizza({ id:4, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id:5, name: "BBQ Chicken", price: 12 })
addNewPizza({ id:6, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

export {}