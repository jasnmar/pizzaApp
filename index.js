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
        return;
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
        console.error(`${orderId} was not found in the queue`);
        return;
    }
    completedOrder.status = "completed";
    return completedOrder;
}
function getPizzaDetail(identifier) {
    console.log("typeof identifier:", typeof identifier);
    if (typeof identifier === "string") {
        const pizza = menu.find((item) => item.name === identifier);
        if (!pizza) {
            console.error(`${identifier} name was not found on the menu`);
            return;
        }
        return pizza;
    }
    else if (typeof identifier === "number") {
        const pizza = menu.find((item) => item.id === identifier);
        if (!pizza) {
            console.error(`${identifier} id was not found on the menu`);
            return;
        }
        return pizza;
    }
    else {
        throw new TypeError("Parameter 'identifier' must be either a string or number");
    }
}
addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log(getPizzaDetail("Pepperoni"));
console.log(getPizzaDetail(3));
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
