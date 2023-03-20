import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Hunt} from "./hunt";
import {ARCHIS_HUNT_KEY, BOSSES_HUNT_KEY, MONSTERS_HUNT_KEY} from "../constants/storage-keys";

@Injectable({
  providedIn: 'root'
})
export class InitHuntService {
  constructor(
    private readonly localStorage: LocalStorageService,
  ) { }

  public initHunt(): void {
    this.initMonsters();
    this.initBosses();
    this.initArchis();
  }

  public initMonsters(): void {
    const newHunt: Hunt = {
      caught: [],
      uncaught: [],
    }
    this.localStorage.delete(MONSTERS_HUNT_KEY);
    this.localStorage.write(MONSTERS_HUNT_KEY, newHunt);
  }

  public initBosses(): void {
    const newHunt: Hunt = {
      caught: [],
      uncaught: [],
    }
    this.localStorage.delete(BOSSES_HUNT_KEY);
    this.localStorage.write(BOSSES_HUNT_KEY, newHunt);
  }

  public initArchis(): void {
    const newHunt: Hunt = {
      caught: [],
      uncaught: [],
    }
    this.localStorage.delete(ARCHIS_HUNT_KEY);
    this.localStorage.write(ARCHIS_HUNT_KEY, newHunt);
  }
}
