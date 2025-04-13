import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {LandingHomeComponent} from './landing-home/landing-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
