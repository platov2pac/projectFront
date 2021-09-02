import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {PrimeIcons} from "primeng/api";
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RippleModule} from "primeng/ripple";
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserTableComponent } from './components/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    UserTableComponent

  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/auth', pathMatch: 'full'},
      {path: 'auth', component: LoginComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'userList',component:UserTableComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
