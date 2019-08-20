import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWeightEntryComponent,
    LoginComponent,
    EntryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entries/:id', component: EntryDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
