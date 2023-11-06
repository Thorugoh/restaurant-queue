import { ICommand } from "./icommand";

export class Dish implements ICommand {
    constructor(public name: string, private cookingTime: number ){}

    getCookingTime(): number {
        return this.cookingTime;
    }
    
    async execute(): Promise<void> {
        console.log(`Cooking ${this.name}`);
        await this.cook();
    }

    async cook(): Promise<Dish>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} Ready!\n`);
                resolve(this);
            }, 5000)
        })
    }
}