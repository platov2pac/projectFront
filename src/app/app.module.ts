import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RippleModule} from "primeng/ripple";
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {FooterComponent} from './components/footer/footer.component';
import {UserTableComponent} from './components/user-table/user-table.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    UserTableComponent,
    EditUserComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    FormsModule,

    RouterModule.forRoot([
      {path: '', redirectTo: '/auth', pathMatch: 'full'},
      {path: 'auth', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'userList', component: UserTableComponent},
      {path: 'editUser/:userLogin', component: EditUserComponent},
      {path: 'editUser', component: EditUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
