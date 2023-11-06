export class Dish {
    constructor(public name: string, public cookingTime: number ){}

    async cook(): Promise<Dish>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} Ready!\n`);
                resolve(this);
            }, 5000)
        })
    }
}