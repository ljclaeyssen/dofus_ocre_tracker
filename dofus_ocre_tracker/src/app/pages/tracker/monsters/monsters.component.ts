import {Component, OnInit} from '@angular/core';
import {HuntService} from "../../../services/hunt.service";
import {HUNT_KEY} from "../../../constants/storage-keys";
import {Hunt} from "../../../models/hunt";

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  storageKey = HUNT_KEY.MONSTERS_HUNT_KEY;

  hunt: Hunt | null = null;
  constructor(
    private readonly huntService: HuntService,
  ) {}

  ngOnInit(): void {
    this.hunt = this.huntService.getHunt(this.storageKey);
  }

}
