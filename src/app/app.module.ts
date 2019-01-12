import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { AddDevsComponent } from './add-devs/add-devs.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    AddDevsComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule //add this  to  get  service  running
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
