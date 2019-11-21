import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TicketServiceService } from './ticket-service.service';
import { ChatService } from './chat.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import {AccordionModule} from 'ng-uikit';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRippleModule,            // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,          // <----- import for date formating(optional)
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    AccordionModule,
    NgbModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [TicketServiceService, ChatService],
  bootstrap: [AppComponent],
  exports: [
    MatIconModule
  ]
})
export class AppModule { }
export class MaterialModule {}
