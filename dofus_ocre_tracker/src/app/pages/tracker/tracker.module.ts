import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';
import { MonstersComponent } from './monsters/monsters.component';
import { BossesComponent } from './bosses/bosses.component';
import { ArchisComponent } from './archis/archis.component';


@NgModule({
  declarations: [
    TrackerComponent,
    MonstersComponent,
    BossesComponent,
    ArchisComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ]
})
export class TrackerModule { }
