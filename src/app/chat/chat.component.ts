import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChatapiService } from '../services/chatapi.service';
import { GroupModel } from '../models/group.model';
import { GroupMessage } from '../models/groupmessages.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private router:Router, private chatapi:ChatapiService) {}

  groups:GroupModel[] = []
  selectedGroupId = ''
  massageText = ''
  messages: GroupMessage[] = []

  ngOnInit() {
    this.chatapi.getMyGroups()
   .then(data =>{
     if (data.success == true){
       this.groups = data.data
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
     this.chatapi.sendGroupMessage(this.selectedGroupId, this.massageText)
    .then(data =>{
      //debugger
      if( data.success == true){
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

  onGroupSelect(group: GroupModel){
    this.selectedGroupId=group.id

    this.chatapi.getGroupMessages(this.selectedGroupId, 0, 100)
    .then(data =>{
      if(data.success == true){
        this.messages = data.data
      }
    })
  }
  

}
