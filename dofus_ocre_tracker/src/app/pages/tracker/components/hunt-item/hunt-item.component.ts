import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HuntItem} from "../../../../models/hunt-item";

@Component({
  selector: 'app-hunt-item[huntItem][isCaught]',
  templateUrl: './hunt-item.component.html',
  styleUrls: ['./hunt-item.component.scss']
})
export class HuntItemComponent implements OnInit{

  @Input()
  huntItem!: HuntItem;

  @Input()
  isCaught!: boolean;

  @Output()
  checkedItem = new EventEmitter<HuntItem>();

  itemName: string = '';
  itemLocation: string = '';

  ngOnInit(): void {
    const splitIndex = this.huntItem.name.indexOf('(');
    if (splitIndex !== -1) {
      this.itemName = this.huntItem.name.slice(0, splitIndex);
      this.itemLocation = this.huntItem.name.slice(splitIndex);
    } else {
      this.itemName = this.huntItem.name;
      this.itemLocation = '';
    }
  }
}
