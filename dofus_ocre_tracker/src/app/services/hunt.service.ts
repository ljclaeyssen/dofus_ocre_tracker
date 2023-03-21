import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Hunt} from "../models/hunt";
import {HUNT_KEY} from "../constants/storage-keys";
import {InitHuntService} from "./init-hunt.service";
import {HuntItem} from "../models/hunt-item";

@Injectable({
  providedIn: 'root'
})
export class HuntService {

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly initHuntService: InitHuntService,
  ) { }

  getHunt(key: HUNT_KEY): Hunt {
    try{
      return this.localStorage.read<Hunt>(key)
    } catch (e) {
      return this.initHuntService.initHuntStep(key);
    }
  }

  declareCaught(key: HUNT_KEY, elementCaught: HuntItem): Hunt {
    const hunt = this.localStorage.read<Hunt>(key);
    hunt.uncaught.splice(hunt.uncaught.findIndex(item => item.name === elementCaught.name),1)
    hunt.caught.push(elementCaught);
    this.localStorage.write(key, hunt);
    return hunt;
  }

  declareUnCaught(key: HUNT_KEY, elementCaught: HuntItem): Hunt {
    const hunt = this.localStorage.read<Hunt>(key);
    hunt.caught.splice(hunt.caught.findIndex(item => item.name === elementCaught.name),1)
    hunt.uncaught.push(elementCaught);
    this.localStorage.write(key, hunt);
    return hunt;
  }

}

