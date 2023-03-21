import { Component } from '@angular/core';
import {HUNT_KEY} from "../../constants/storage-keys";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  public huntTypes = HUNT_KEY;
}
