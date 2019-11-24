import { Component, OnInit, Directive} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { ImageService } from '../../image.service';
import { TicketServiceService } from 'src/app/ticket-service.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  // tslint:disable-next-line: max-line-length
  constructor(private storage: AngularFireStorage, private service: ImageService ,private formBuilder: FormBuilder, private ticketService: TicketServiceService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '../../../assets/photo.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'other'
    });
    this.imgSrc = '../../../assets/photo.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
  selectedFile: any;
  submitted = false;

  form = new FormGroup({
    ticketNumber: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required ),
    date: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required)
  })

  Submit() {

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


}
