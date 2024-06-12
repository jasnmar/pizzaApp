let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];
let nextPizzaId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
function addNewPizza(pizza) {
    const pizzaWithId = Object.assign({ id: nextPizzaId++ }, pizza);
    menu.push(pizzaWithId);
    return pizzaWithId;
}
function addToArray(array, item) {
    array.push(item);
    return array;
}
// example usage:
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" });
console.log(menu);
console.log(orderQueue);
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
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log(getPizzaDetail("Pepperoni"));
console.log(getPizzaDetail(3));
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
