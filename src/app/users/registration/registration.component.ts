import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,  private http: HttpClient) {    
  }
  newUser:{
    firstName?:string,
    lastName?:string,
    email?:string,
    password?:string,
    passwordRepeat?:string} = {}

  ngOnInit() {
  }
  
  onSubmit(){
    this.http.post('http://localhost:3001/user/signup', {
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      email:this.newUser.email,
      password:this.newUser.password      
    })

    .toPromise()
    .then(data =>{
      console.log(data)
      if(data['success'] == true){
        this.router.navigate(['users/login'])
      }
      else{
        alert('person not register')
      }
    })

    .catch(reason =>{    
    })
  }
}
