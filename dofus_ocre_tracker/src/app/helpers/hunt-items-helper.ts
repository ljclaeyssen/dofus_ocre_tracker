import {HuntItem} from "../models/hunt-item";

export function convertRawDataToHuntItem(data: string[]): HuntItem[] {
  const toReturn: HuntItem[] = [];
  data.forEach(elt => toReturn.push({name: elt}))
  return toReturn;
}
