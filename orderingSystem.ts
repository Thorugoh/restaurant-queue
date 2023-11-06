import { Dish } from "./dish";

export class OrderingSystem {
    private dishes: Dish[] = [];
    
    private cookingTime = 0;
    private isCooking = false;

    addToQueue(dish: Dish) {
        this.dishes.push(dish);
        this.cookingTime += dish.cookingTime;

        if (!this.isCooking) {
            this.cook();
        }

        return this.cookingTime;
    }

    async cook() {
        if (this.isCooking) {
            return;
        }

        this.isCooking = true;
        while(this.dishes.length > 0) {
            const dish = this.dishes.shift();
            if(dish) {
                console.log(`Cooking ${dish.name}`);
                
                await dish.cook();
                this.cookingTime -= dish.cookingTime;
            }
        }

        this.isCooking = false;
    }
}