import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TrackerComponent} from "./pages/tracker/tracker.component";
import {ArchisComponent} from "./pages/tracker/archis/archis.component";
import {BossesComponent} from "./pages/tracker/bosses/bosses.component";
import {MonstersComponent} from "./pages/tracker/monsters/monsters.component";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    ArchisComponent,
    BossesComponent,
    MonstersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
