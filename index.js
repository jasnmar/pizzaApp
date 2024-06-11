"use strict";
/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];
function addNewPizza(pizza) {
    menu.push(pizza);
}
function placeOrder(pizzaName) {
    const pizzaObject = menu.find((item) => item.name === pizzaName);
    if (!pizzaObject) {
        console.error(`${pizzaName} does not exist in the menu`);
        return false;
    }
    cashInRegister += pizzaObject.price;
    const pizzaOrder = {
        pizza: pizzaObject,
        id: nextOrderId,
        status: "ordered"
    };
    nextOrderId++;
    orderQueue.push(pizzaOrder);
    console.log('pizzaOrder: ', pizzaOrder);
    return pizzaOrder;
}
function completeOrder(orderId) {
    const completedOrder = orderQueue.find((order) => order.id === orderId);
    if (!completedOrder) {
        console.error(`${completeOrder} was not found in the queue`);
        return false;
    }
    completedOrder.status = "completed";
    console.log('completedOrder: ', completedOrder);
    return completeOrder;
}
addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
