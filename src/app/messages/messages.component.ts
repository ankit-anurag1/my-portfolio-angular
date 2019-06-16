import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../messages'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  messages = MESSAGES;
  isModalVisible : boolean;

  constructor() { 
    this.isModalVisible = false;
  }

  ngOnInit() {
    
  }

  triggerModal(){
    this.isModalVisible = !this.isModalVisible
  }

}
