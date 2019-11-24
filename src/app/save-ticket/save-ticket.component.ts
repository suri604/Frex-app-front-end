import { Component, OnInit, Directive } from '@angular/core';
import { TicketServiceService } from '../ticket-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-save-ticket',
  templateUrl: './save-ticket.component.html',
  styleUrls: ['./save-ticket.component.css']
})

export class SaveTicketComponent implements OnInit {
  selectedFile: any;
  form: FormGroup;
  submitted = false;
  // startDate = new Date(2000, 0, 1);
  // minDate = new Date(2000, 0, 1);
  // maxDate = new Date(2020, 0, 1);
  
  constructor(private ticketService: TicketServiceService ,private http: HttpClient, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      ticketNumber: ['', Validators.required],
      price: ['', Validators.required, Validators.maxLength(4)],
      date: ['', Validators.required],
      distance: ['', Validators.required, Validators.maxLength(4)],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }
  // saveTicket(ticketNumber, price, date, distance) {
  //   this.ticketService.saveTicket(ticketNumber, price, date, distance).subscribe(data => {
  //      console.log(data);
  //    })
  // }
  onSubmit() {
    
    // console.log("inside component : ",this.form.value.ticketNumber,
    // this.form.value.price,
    // this.form.value.date,
    // this.form.value.distance);

    this.submitted = true;
    this.ticketService.saveTicket(  this.form.value.ticketNumber, this.form.value.price,
                                    this.form.value.date, this.form.value.distance)
    .subscribe( data => {
      console.log(data);
     });
     // stop here if form is invalid
    if (this.form.invalid) {
    return;
  }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
}
  get f() { return this.form.controls; }

  onReset() {
    this.submitted = false;
    this.form.reset();
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
  
  // url:any;
  // onFileSelected(event){
    
  //   this.selectedFile =<File>event.target.files[0];
  //   var reader = new FileReader();
      
  //       reader.readAsDataURL(event.target.files[0]); // read file as data url
  
  //       reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = reader.result;

  //       }

  // }
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append( 'image', this.selectedFile);
  //   this.http.post('http://localhost:8063/photos/add', fd).subscribe(res => {
  //     console.log(res);
  //   })
 // }
}




