import {HuntItem} from "../models/hunt-item";

export interface Hunt {
  uncaught: HuntItem[];
  caught: HuntItem[];
}
