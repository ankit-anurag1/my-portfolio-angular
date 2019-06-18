import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from './message'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  messages : Message[];
  lengthMessages : number;

  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get<Message[]>("http://localhost:5000/messages");
  }
  
  addMessage(message: Message){
    return this.http.post("http://localhost:5000/messages", message);
  }

}
