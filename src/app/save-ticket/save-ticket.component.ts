import { Component, OnInit, Directive } from '@angular/core';
import { TicketServiceService } from '../ticket-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-save-ticket',
  templateUrl: './save-ticket.component.html',
  styleUrls: ['./save-ticket.component.css']
})

export class SaveTicketComponent implements OnInit {
  selectedFile: any;
  showMsg: boolean = false;
  // startDate = new Date(2000, 0, 1);
  // minDate = new Date(2000, 0, 1);
  // maxDate = new Date(2020, 0, 1);
  
  constructor(private ticketService: TicketServiceService ,private http: HttpClient) { }
  
  ngOnInit() {
  }
  saveTicket(ticketNumber, price, date, distance) {

    console.log("inside component : ", date);
    this.ticketService.saveTicket(ticketNumber, price, date, distance).subscribe(data => {
       console.log(data);
     });
  }
  // url: any;

  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
    
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     // reader.onload = (event) => { // called once readAsDataURL is completed
  //     this.url = event.target.result;
  //     }
  //   }
  // }
  
  url:any;
  onFileSelected(event){
    
    this.selectedFile =<File>event.target.files[0];
    var reader = new FileReader();
      
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;

        }

  }
  onUpload() {
    const fd = new FormData();
    fd.append( 'image', this.selectedFile);
    this.http.post('http://localhost:8063/photos/add', fd).subscribe(res => {
      console.log(res);
    })

  }
}

 


