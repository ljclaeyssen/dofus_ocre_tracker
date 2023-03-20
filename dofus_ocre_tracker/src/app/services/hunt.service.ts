import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class HuntService {

  constructor(
    private readonly localStorage: LocalStorageService,
  ) { }


}
