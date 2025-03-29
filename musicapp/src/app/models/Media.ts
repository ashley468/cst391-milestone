export class Media {
    private type: string = "";
    private artist: string = "";
    private albumTitle: string = "";
    private releaseYear: number = 1990;

    constructor(type: string, artist: string, albumTitle: string, releaseYear: number) {
        this.type = type;
        this.artist = artist;
        this.albumTitle = albumTitle;
        this.releaseYear = releaseYear;
    }

    get Type(): string {
        return this.type;
    }
    set Type(type: string) {
        this.type = type;
    }

    get Artist(): string {
        return this.artist;
    }
    set Artist(artist: string) {
        this.artist = artist;
    }

    get AlbumTitle(): string {
        return this.albumTitle;
    }
    set AlbumTitle(albumTitle: string) {
        this.albumTitle = albumTitle;
    }

    get ReleaseYear(): number {
        return this.releaseYear;
    }
    set ReleaseYear(releaseYear: number) {
        this.releaseYear = releaseYear;
    }
}
