import { Url } from "url";
import { Editorial } from "../editorial/editorial";

export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: any;
    description: string;
    webpage: Url;
    poster: Url;

    constructor(
    id: number,
    name: string,
    channel: string,
    seasons: any,
    description: string,
    webpage: Url,
    poster: Url

    ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
 }


}
