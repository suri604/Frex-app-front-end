import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private _url :string= "http://localhost:8063/api/v1/saveTicket";
  private url1 :string= "http://localhost:8063/api/v1/getTicket"
  
  constructor(private http: HttpClient) { }

  getAllTickets() : Observable<any>
  {
    return this.http.get<any>(this.url1);

  }

 saveTicket( ticketNumber: Number, price: Number , date: any , distance: Number)
  {
     console.log("hello");
     return this.http.post(this._url,
      {
      // "id":id,
      // "repoName":repoName,
      // "createdAt":createdAt
      "ticketNumber" : ticketNumber,
      "price" : price,
      "date" : date,
      "distance" : distance
    })
  }
}
