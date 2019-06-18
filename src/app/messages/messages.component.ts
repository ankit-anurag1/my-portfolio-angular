import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

import { Message } from '../message'
import { MessagingService } from '../messaging.service'
import { MessageFormComponent } from '../message-form/message-form.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages : Message[];
  messagesRecent : Message[];
  lengthMessages : number;
  constructor(
    private dialog: MatDialog,
    private messaging: MessagingService 
  ) {}

  ngOnInit() {
    this.getMessages();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "40vw";
    dialogConfig.data = {
      id : this.messaging.lengthMessages,
      pubDate : Date(),
    }
    this.dialog.open(MessageFormComponent, dialogConfig)
      .afterClosed().subscribe(result => {
        // console.log(result.message);
        this.messages.push(result.message);
        this.messagesRecent = this.messages.slice(-3,);
    })
  }

  getMessages(){
    this.messaging.getMessages().subscribe(data => {
      this.messages =  data;
      this.messagesRecent = this.messages.slice(-3,);
    })
  }

}
