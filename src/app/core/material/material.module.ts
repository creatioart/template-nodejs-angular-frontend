import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DATE_FORMATS} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMM YYYY',
  },
  display: {
    dateInput: 'DD MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
  ],
  declarations: []
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  }
}
