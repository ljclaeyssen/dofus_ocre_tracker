import {HuntItem} from "./hunt-item";

export interface Hunt {
  uncaught: HuntItem[];
  caught: HuntItem[];
}
