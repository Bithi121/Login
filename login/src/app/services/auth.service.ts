import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseServerUrl="https://localhost:44343/api/";
  
  constructor(private http: HttpClient) {  }

  registerUser(reg : any)
  {
    return this.http.post(this.baseServerUrl+"Register/CreateUser",reg,
    {responseType: 'text'});
    
}
loginUser(reg : any)
{
  return this.http.post(this.baseServerUrl+"Register/LoginUser",reg,
  {responseType: 'text'});
  
}
}
