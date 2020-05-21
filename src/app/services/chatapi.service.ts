import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { MyGroupsResult } from '../models/mygroupsresult.model';
import { SendMessageResult } from '../models/sendmessageresult.model';
import { GroupMessagesResult } from '../models/groupmessageresult.model';
import { promise } from 'protractor';
import { ReciveGroupMessages } from '../models/recivegroupmessages.model';

@Injectable({
  providedIn: 'root'
})
export class ChatapiService {

  constructor(private http: HttpClient, private auth:AuthService) { }

  getMyGroups() : Promise<MyGroupsResult> {
    return this.http.get<MyGroupsResult>('http://localhost:3001/group', {
    headers:{ "Authorization":`Bearer ${this.auth.getAuthToken()}`
    }})
    .toPromise()
  }

  sendGroupMessage(groupId:string, massageText: string) : Promise<SendMessageResult>{
    return this.http.post<SendMessageResult>(`http://localhost:3001/group/${groupId}/send/text`,
      {'text': massageText},
      { headers:{ "Authorization":`Bearer ${this.auth.getAuthToken()}`} })
    .toPromise()
  }

  getGroupMessages(groupId:string, offset: number, page:number) : Promise<GroupMessagesResult> {
    return this.http.get<GroupMessagesResult>(`http://localhost:3001/group/${groupId}/messages/offset/${offset}/page/${page}`,
    {headers:{"Authorization":`Bearer ${this.auth.getAuthToken()}`} })
    .toPromise()
  }

  reciveGroupMessages(groupId:string, massageText:string) : Promise<ReciveGroupMessages>{
    return this.http.get<ReciveGroupMessages>(`http://localhost:3001/pooling/message/recive`,
    {headers:{"Authorization": `Bearer ${this.auth.getAuthToken()}`}} )
    .toPromise()
  }

}
