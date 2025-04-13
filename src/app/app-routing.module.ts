import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {provideZoneChangeDetection } from '@angular/core';
import {provideRouter} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./landing/dashboard.module').then(m => m.LandingModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes)]
})
export class AppRoutingModule { }
