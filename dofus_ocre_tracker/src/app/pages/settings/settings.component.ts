import { Component } from '@angular/core';
import {InitHuntService} from "../../services/init-hunt.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    private readonly initService: InitHuntService,
  ) {
  }

  public reinitializeEveryHunt(): void {
    if (confirm('Voulez-vous vraiment réinitialiser TOUTES les chasses ? \n cette action est irréversible')) {
      this.initService.initHunt();
    }
  }
}
