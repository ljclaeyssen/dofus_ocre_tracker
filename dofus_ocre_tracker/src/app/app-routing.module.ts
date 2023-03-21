import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackerComponent} from "./pages/tracker/tracker.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: 'hunt',
    component: TrackerComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    redirectTo: 'hunt',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
