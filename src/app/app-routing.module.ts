import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './Features/home/home.module';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () =>
      import('./Features/home/home.module').then((m) => m.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
