import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

import { MESSAGES } from '../messages'
import { MessageFormComponent } from '../message-form/message-form.component';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  messages = MESSAGES;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "40vw";

    this.dialog.open(MessageFormComponent, dialogConfig);
  }
}
