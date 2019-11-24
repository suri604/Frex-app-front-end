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
import {AccordionModule} from 'ng-uikit';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImagesComponent } from './images/images.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ImageComponent,
    ImageListComponent,
    ImagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AccordionModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig1),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [TicketServiceService, ChatService],
  bootstrap: [AppComponent],
  exports: [
   
  ]
})
export class AppModule { }
export class MaterialModule {}
