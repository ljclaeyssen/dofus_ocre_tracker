import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackerComponent} from "./pages/tracker/tracker.component";

const routes: Routes = [
  {
    path: 'hunt',
    component: TrackerComponent
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
