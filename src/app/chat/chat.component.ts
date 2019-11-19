import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { scan } from 'rxjs/operators';
import { Message, ChatService } from '../chat.service';
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService, private router:Router) { }

  ngOnInit() {
     this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    // this.chat.converse(this.formValue);
    // this.formValue = '';
    if(this.formValue =='create')
    {
       this.router.navigateByUrl('/save');
    }
    if(this.formValue =='save')
    {
       this.router.navigateByUrl('/save');
    }
    if(this.formValue == 'add')
    {
      this.router.navigateByUrl('/save');
   }
   if(this.formValue == 'get')
    {
      this.router.navigateByUrl('/getTicket');
   }
   if(this.formValue == 'show')
   {
     this.router.navigateByUrl('/getTicket');
  }
  if(this.formValue == 'history')
  {
    this.router.navigateByUrl('/getTicket');
 }
 if(this.formValue == 'History')
 {
   this.router.navigateByUrl('/getTicket');
}




  }

}
