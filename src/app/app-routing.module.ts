import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SaveTicketComponent } from './save-ticket/save-ticket.component';
import { ChatComponent } from './chat/chat.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';


const routes: Routes = [

  { path : 'getTicket' , component: AllTicketsComponent},
   { path : '' , component: HomeComponent},
   { path: 'save', component: ImageComponent },
   {
     path: 'image', component: ImagesComponent, children: [
      { path: 'list', component: ImageListComponent }
     ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AllTicketsComponent, ChatComponent, HomeComponent];
