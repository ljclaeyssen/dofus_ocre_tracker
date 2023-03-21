import {Component, Input, OnInit} from '@angular/core';
import {HuntService} from "../../../services/hunt.service";
import {HUNT_KEY} from "../../../constants/storage-keys";
import {Hunt} from "../../../models/hunt";
import {HuntItem} from "../../../models/hunt-item";

@Component({
  selector: 'app-monsters[huntType]',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  @Input()
  huntType!: HUNT_KEY;

  hunt: Hunt | null = null;

  searchField: string = '';

  catchable: HuntItem[] = []

  constructor(
    private readonly huntService: HuntService,
  ) {}

  ngOnInit(): void {
    this.hunt = this.huntService.getHunt(this.huntType);
    this.catchable = this.hunt.uncaught;
  }

  public refreshSearch(searchValue: string): void {
    const everyCatchable = this.hunt?.uncaught as HuntItem[];
    this.searchField = searchValue;
    if (searchValue) {
      this.catchable = everyCatchable.filter((element) => element.name.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
      this.catchable = everyCatchable;
    }
  }

  public catch(item: HuntItem): void {
    this.hunt = this.huntService.declareCaught(this.huntType, item);
    this.refreshSearch(this.searchField);
  }

  public release(item: HuntItem): void {
    this.hunt = this.huntService.declareUnCaught(this.huntType, item);
    this.refreshSearch(this.searchField);
  }

}
