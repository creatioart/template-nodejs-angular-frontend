import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';
import {throwIfAlreadyLoaded} from './guards/module-import.guard';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    AuthGuard,
    MediaMatcher,
    {
      provide: 'LOCALSTORAGE',
      useValue: window.localStorage
    }
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
