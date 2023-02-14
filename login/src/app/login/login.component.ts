import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private loginauth:AuthService){}
  ngOnInit(): void {
    
  }

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required, Validators.email]),
    pwd:new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });
  isUserValid:boolean =false;
loginSubmitted()
{
  console.log(this.loginForm.value);
  this.loginauth.loginUser(this.loginForm.value).subscribe(res=>{ 
    if(res=='Failure')
    {
      this.isUserValid=false;
      alert("Login Unsuccesfull");
    }
    else{
      this.isUserValid=true;
      alert("Login succesfull");
    }
    
  
  });
}
  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;

  }
  get PWD():FormControl{
    return this.loginForm.get('pwd') as FormControl;
    
  }
}
