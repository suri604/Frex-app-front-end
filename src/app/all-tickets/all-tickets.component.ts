import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
  public ticketList:any;
  constructor(private ticketService: TicketServiceService) {}
   

  ngOnInit() {
    this.ticketService.getAllTickets().subscribe(data=>
      {
        this.ticketList=data;
        console.log(data);
      })
  }
  

}
