import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,
  Validators } from '@angular/forms'

import { sizeMESSAGES } from '../messages'

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  messageForm : FormGroup;

  constructor(
    private form : FormBuilder
    ) {
      this.messageForm = this.form.group({
        'name' : ['', [
          Validators.pattern('^[a-zA-Z ]+$')
        ]],
        'id' : [sizeMESSAGES + 1],
        'email' : ['', [
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]],
        'pubDate' : [Date()],
        'content' : ['']
      })
   }

  ngOnInit(){  
  }

  onSubmit() : void {
    console.warn(this.messageForm.value);
    this.messageForm.reset();
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

}





