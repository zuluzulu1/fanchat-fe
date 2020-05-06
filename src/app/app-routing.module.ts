import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { UserEditComponent } from './chat/user-edit/user-edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'chat', component:ChatComponent, canActivate:[AuthGuard] },
  {path:'users', children:[
    {path:'login', component: LoginComponent},
    {path:'registration', component: RegistrationComponent}
  ]},
  {path: '**', redirectTo: '/chat'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
