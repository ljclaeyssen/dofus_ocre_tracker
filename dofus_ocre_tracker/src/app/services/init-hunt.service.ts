import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Hunt} from "../models/hunt";
import {HUNT_KEY} from "../constants/storage-keys";
import {archis} from "../constants/archis";
import {convertRawDataToHuntItem} from "../helpers/hunt-items-helper";
import {bosses} from "../constants/bosses";
import {monsters} from "../constants/monsters";

@Injectable({
  providedIn: 'root'
})
export class InitHuntService {
  constructor(
    private readonly localStorage: LocalStorageService,
  ) { }

  public initHunt(): void {
    const newHunt: Hunt = {
      caught: [],
      uncaught: [],
    }
    this.localStorage.delete(HUNT_KEY.MONSTERS_HUNT_KEY);
    this.localStorage.write(HUNT_KEY.MONSTERS_HUNT_KEY, newHunt);
    this.localStorage.delete(HUNT_KEY.BOSSES_HUNT_KEY);
    this.localStorage.write(HUNT_KEY.BOSSES_HUNT_KEY, newHunt);
    this.localStorage.delete(HUNT_KEY.ARCHIS_HUNT_KEY);
    this.localStorage.write(HUNT_KEY.ARCHIS_HUNT_KEY, newHunt);
  }

  public initHuntStep(key: HUNT_KEY): Hunt {
    const newHunt: Hunt = {
      caught: [],
      uncaught: [],
    }
    switch (key) {
      case HUNT_KEY.ARCHIS_HUNT_KEY:
        newHunt.uncaught = convertRawDataToHuntItem(archis);
        newHunt.caught = convertRawDataToHuntItem(archis);
        break;
      case HUNT_KEY.BOSSES_HUNT_KEY:
        newHunt.uncaught = convertRawDataToHuntItem(bosses);
        newHunt.caught = convertRawDataToHuntItem(bosses);
        break;
      case HUNT_KEY.MONSTERS_HUNT_KEY:
        newHunt.uncaught = convertRawDataToHuntItem(monsters);
        newHunt.caught = convertRawDataToHuntItem(monsters);
        break;
    }
    this.localStorage.delete(key);
    this.localStorage.write(key, newHunt);
    return newHunt;
  }
}
