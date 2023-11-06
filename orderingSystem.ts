import { ICommand } from "./icommand";

export class OrderingSystem {
    private commandQueue: ICommand[] = []; 
    private cookingTime = 0;   
    private isCooking = false;

    enqueueCommand(command: ICommand) {
        this.commandQueue.push(command);
        this.cookingTime += command.getCookingTime();
        if(!this.isCooking) {
            this.processCommands();
        }
    }

    async processCommands() {
        if (this.isCooking) {
            return;
        }

        this.isCooking = true;
        while(this.commandQueue.length > 0) {
            const command = this.commandQueue.shift();
            if(command) {
                await command.execute();
                this.cookingTime -= command.getCookingTime();
            }
        }

        this.isCooking = false;
    }

    getTotalCookingTime(): number {
        return this.cookingTime;
    }
}