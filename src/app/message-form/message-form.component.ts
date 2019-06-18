import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';

import { Message } from '../message'
import { MessagingService } from '../messaging.service'

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  messageForm : FormGroup;

  constructor(
    private form : FormBuilder,
    private dialogRef: MatDialogRef<MessageFormComponent>,
    private messaging: MessagingService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data
    ) {
      this.messageForm = this.form.group({
        'sender' : ['', [
          Validators.pattern('^[a-zA-Z ]+$')
        ]],
        'id' : [data.id],
        'email' : ['', [
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]],
        'pubDate' : [data.pubDate],
        'content' : ['']
      })
   }

  ngOnInit(){ }

  onSubmit() : void {
    this.addMessage(this.messageForm.value);
    this.messageForm.reset();
  }
  
  addMessage(message: Message){
    console.log("Sending message : " + message.content);
    this.messaging.addMessage(message)
      .subscribe(res => {
        this.dialogRef.close({ 'message' : res });
        // console.log("Message sent!");
        this.openSnackBar();
      },
      err => {
        console.log(err);
        this.close();
      }
    );
  }

  nameValidate(event) {
    let keyAscii = event.which;
    if((keyAscii >= 33 && keyAscii <= 64) || (keyAscii >= 91 && keyAscii <= 96) || keyAscii > 122){
      return false
    }
    if(event.target.value.toString().length === 20){
      if(keyAscii >= 32 && keyAscii <= 126){
        return false
      }
    }
  }

  openSnackBar() {
    this._snackBar.open("Message sent!", "Show", {
      duration: 2000,
    });
  }

  close() {
    this.dialogRef.close();
  }
}
