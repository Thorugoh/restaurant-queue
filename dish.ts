export class Dish {
    private elapsedTimer: number = 0;

    constructor(public name: string, public cookingTime: number ){
    }

    checkElapsedTimer(): number {
        return this.elapsedTimer;
    }

    async cook(): Promise<Dish>{
        return new Promise((resolve) => {
            const intervalId = setInterval(() => {
                this.elapsedTimer += 1000;
            }, 1000);

            setTimeout(() => {
                console.log(`${this.name} Ready!\n`);
                clearInterval(intervalId);

                resolve(this);
            }, this.cookingTime * 1000 / 4);
        })
    }
}