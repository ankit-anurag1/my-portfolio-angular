import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ByeComponent } from './bye/bye.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ByeComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'home', pathMatch : 'full'},
      { path : 'home', component : HomeComponent },
      { path : 'about', component : AboutComponent },
      { path : 'messages', component : MessagesComponent },
      { path : 'bye', component : ByeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
