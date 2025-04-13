import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutComponent} from './layout/layout.component';
import {MaterialModule} from '../core/material/material.module';

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
