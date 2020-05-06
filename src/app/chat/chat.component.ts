import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor( private http: HttpClient, private auth:AuthService, private router:Router) {}

  groups = [{name: "friends"}, { name: "fun" }]
  selectedGroupId = ''
  massageText = ''

  ngOnInit() {
   this.http.get('http://localhost:3001/group', {headers:{ "Authorization":`Bearer ${this.auth.getAuthToken()}`}
   })

   .toPromise()
   .then(data =>{
     if (data['success'] == true){
       this.groups = data['data']
     }
   })
   .catch(reason =>{
     if(reason.status=='404'){
       alert('user not found')
     }
     else{}     
   })
  }

  onSend(){
     this.http.post(`http://localhost:3001/group/${this.selectedGroupId}/send/text`,
      {'text': this.massageText},
      { headers:{ "Authorization":`Bearer ${this.auth.getAuthToken()}`} })
    .toPromise()
    .then(data =>{
      if( data['success']['success'] == true){
        this.massageText = ''
      }
    })
    .catch(reason =>{ 
      if(reason.status == '404'){
        alert("User not found!")
      }
      else{}
    })
  }

  onSignOut(){
    this.router.navigate(['users/login'])
  }
}
