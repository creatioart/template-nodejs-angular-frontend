import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule } from './auth-routing.module';
import {MaterialModule} from '../core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: [
  ]
})
export class AuthModule { }
