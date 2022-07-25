import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';

import { ChangeComponent } from './Components/change/change.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggedService } from './logged.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  providers: [LoggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
