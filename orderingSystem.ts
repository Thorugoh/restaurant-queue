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
        
        return this.cookingTime - this.dishes[0].checkElapsedTimer() / 1000 * 4;
    }

    async cook() {
        if (this.isCooking) {
            return;
        }

        this.isCooking = true;
        while(this.dishes.length > 0) {
            const dish = this.dishes[0];
            if(dish) {
                console.log(`Cooking ${dish.name}`);
                
                await dish.cook();
                this.dishes.shift();
                this.cookingTime -= dish.cookingTime;
            }
        }

        this.isCooking = false;
    }
}