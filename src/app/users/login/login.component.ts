import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private auth:AuthService) {}
  user:{
    email:string,
    password:string
    } = {email: '', password: ''}

  ngOnInit() {
  }

  onSubmit(){
    this.http.post('http://localhost:3001/user/signin',
     {
      email: this.user.email,
      password: this.user.password
    })
    .toPromise()
    .then(data => {
      if (data['success'] == true){
        this.auth.setAuthenticated(data['token'])
        this.router.navigate(['chat'])
      }
    })
    .catch(reason => {
      if(reason.status == '404'){
        alert("User not found!")
      }
      else{
      }
      console.log(reason)
    })
  }
}
