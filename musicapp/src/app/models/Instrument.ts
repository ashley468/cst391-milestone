import { Media } from "./Media";

export class Instrument {
    private type: string = "";
    private brand: string = "";
    private model: string = "";
    private media: Media[] = [];

    constructor(type: string, brand: string, model: string, media: Media[]) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.media = media;
    }


    get Type(): string {
        return this.type;
    }
    set Type(type: string) {
        this.type = type;
    }

    get Brand(): string {
        return this.brand;
    }
    set Brand(brand: string) {
        this.brand = brand;
    }

    get Model(): string {
        return this.model;
    }
    set Model(model: string) {
        this.model = model;
    }

    get Media(): Media[] {
        return this.media;
    }
    set Media(media: Media[]) {
        this.media = media;
    }
}
