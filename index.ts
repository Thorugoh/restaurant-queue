import { Dish } from "./dish";
import { OrderingSystem } from "./orderingSystem";

const menuItems = [
    { "name": "Portuguesa", "cookingTime": 60},
    { "name": "Quatro queijos", "cookingTime": 50},
    { "name": "Mussarela", "cookingTime": 40},
    { "name": "Lombinho", "cookingTime": 40},
    { "name": "Bacon", "cookingTime": 70},
    { "name": "Brócoli", "cookingTime": 20},
    { "name": "Italiana", "cookingTime": 35}
];

function printMenu() {
    console.log("    --- Pizza Menu ---  ")
    menuItems.forEach((item, idx) => {
        console.log(`${idx + 1}: ${item.name}`)
    })
}

const main = async () => {

    printMenu();

    for await (const choice of console) {
        console.clear();
        printMenu();
        const item = menuItems[Number(choice) - 1];
        const dishCommand = new Dish(item.name, item.cookingTime);
        system.enqueueCommand(dishCommand);
        console.log(`It will take ${system.getTotalCookingTime() / 4} seconds for preparing a ${item.name}`);
    }
}

const system = new OrderingSystem();
main();

         
