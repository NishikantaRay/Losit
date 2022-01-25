import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContributorComponent } from './pages/contributor/contributor.component';
import { CloneListComponent } from './pages/clone-list/clone-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { IntropageComponent } from './pages/intropage/intropage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { StardetailsComponent } from './pages/stardetails/stardetails.component';
import { SinglepagesComponent } from './pages/singlepages/singlepages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContributorComponent,
    CloneListComponent,
    AboutComponent,
    ContactusComponent,
    IntropageComponent,
    MainpageComponent,
    StardetailsComponent,
    SinglepagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
