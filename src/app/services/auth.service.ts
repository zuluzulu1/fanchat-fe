import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  
  isAuthenticated() : boolean{
    return localStorage.getItem('token') != null ? true : false
  }
  setAuthenticated(token:string){
    localStorage.setItem('token', token)
  }

  getAuthToken(): string{
    return localStorage.getItem('token')
  }

  removeToken(){
    localStorage.removeItem('token')
  }
}
 