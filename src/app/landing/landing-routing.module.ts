import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent } from '../shared/layout/layout.component';
import {LandingHomeComponent} from './landing-home/landing-home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
    [
      { path: '', component: LandingHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
