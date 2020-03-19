import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './users/login/login.component';
import { UserEditComponent } from './chat/user-edit/user-edit.component';
import { RegistrationComponent } from './users/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChatComponent,
    LoginComponent,
    RegistrationComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
