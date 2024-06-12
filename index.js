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
function getPizzaDetail(identifier) {
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */
    if (typeof identifier === "string") {
        const pizza = menu.find((item) => item.name === identifier);
        if (!pizza) {
            console.error(`${identifier} name was not found on the menu`);
            return;
        }
        return pizza;
    }
    else {
        const pizza = menu.find((item) => item.id === identifier);
        if (!pizza) {
            console.error(`${identifier} id was not found on the menu`);
            return;
        }
        return pizza;
    }
}
addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
