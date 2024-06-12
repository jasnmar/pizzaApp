
type Pizza = {
  id: number,
  name: string,
  price: number
}

type Order = {
  pizza: Pizza,
  id: number,
  status: "ordered" | "completed"
}

let nextOrderId: number = 1
let cashInRegister: number = 100
const orderQueue: Order[] = []
let nextPizzaId: number = 1

const menu: Pizza[] = [
  {id:nextPizzaId++, name: "Margherita", price: 8},
  {id:nextPizzaId++, name: "Pepperoni", price: 10},
  {id:nextPizzaId++, name: "Hawaiian", price: 10},
  {id:nextPizzaId++, name: "Veggie", price: 9},
]

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const pizzaWithId: Pizza = { id:nextPizzaId++, ...pizza }
  menu.push(pizzaWithId)
  return pizzaWithId
} 

function placeOrder(pizzaName: string): Order {
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


function completeOrder(orderId: number): Order {
  const completedOrder = orderQueue.find((order) => order.id === orderId)
  if (!completedOrder) {
    console.error(`${orderId} was not found in the queue`)
    return;
  }
  completedOrder.status = "completed"
  return completedOrder
}

function getPizzaDetail(identifier: string | number): Pizza {
  console.log("typeof identifier:", typeof identifier);
  if (typeof identifier === "string") {
    const pizza = menu.find((item) => item.name === identifier);
    if (!pizza) {
      console.error(`${identifier} name was not found on the menu`);
      return;
    }
    return pizza;
  } else if (typeof identifier === "number") {
    const pizza = menu.find((item) => item.id === identifier);
    if (!pizza) {
      console.error(`${identifier} id was not found on the menu`);
      return;
    }
    return pizza;
  } else {
    throw new TypeError(
      "Parameter 'identifier' must be either a string or number"
    );
  }
}


addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log(getPizzaDetail("Pepperoni"))
console.log(getPizzaDetail(3))

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
