import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

 
  {
    path:'app-login',
    component:LoginComponent
  },
  {
    path:'app-register',
    component:RegisterComponent
  }
];

@NgModule({

  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
