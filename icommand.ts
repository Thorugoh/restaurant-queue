export interface ICommand {
    execute(): Promise<void>;
    getCookingTime(): number;
}