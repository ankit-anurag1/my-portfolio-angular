import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ByeComponent } from './bye/bye.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ByeComponent,
    MessagesComponent,
    MessageFormComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'home', pathMatch : 'full'},
      { path : 'home', component : HomeComponent },
      { path : 'about', component : AboutComponent },
      { path : 'messages', component : MessagesComponent },
      { path : 'bye', component : ByeComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ MessageFormComponent ]
})
export class AppModule { }
