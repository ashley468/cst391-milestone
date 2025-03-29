export class Accessory 
{
    private id: number = 1;
    private type: string = "";

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Type(): string {
        return this.type;
    }
    set Type(type: string) {
        this.type = type;
    }
}
