import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveTicketComponent } from './save-ticket/save-ticket.component';
import { ChatComponent } from './chat/chat.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path : 'save' , component: SaveTicketComponent},
  { path : 'getTicket' , component: AllTicketsComponent},
   { path : '' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SaveTicketComponent , AllTicketsComponent, ChatComponent, HomeComponent];
