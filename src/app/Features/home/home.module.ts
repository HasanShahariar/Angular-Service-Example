import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MailsComponent } from './components/mails/mails.component';
import { BannerComponent } from './components/Banner/Banner.component';




@NgModule({
  declarations: [HomepageComponent,BannerComponent,MailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
