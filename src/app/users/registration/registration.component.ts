import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router) { }


  newUser:{
    firstName?:string,
    lastName?:string,
    email?:string,
    password?:string,
    passwordRepeat?:string} = {}

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
