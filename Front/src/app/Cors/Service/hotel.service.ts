import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpEvent,HttpParams,HttpRequest   } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hotel } from '../Model/Hotel'; 
import { User } from '../Model/User';
import { reservation } from '../Model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url=environment.hostUrl;
  hotel:Hotel=new Hotel();
  user:User=new User();
  reservation:reservation=new reservation();


  tab:any=[];
  public curHotel= new BehaviorSubject(this.hotel);
  sharedHotel = this.curHotel.asObservable();
  constructor(private http:HttpClient) { }

  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.url+'hotel/all');
  }

  signin(user:User){
    return this.http.post(this.url+'users/login',user);
  }

  signup(user:User){
    return this.http.post(this.url+'users/signup',user);
  }

  addReservation(reservation:any){
    return this.http.post(this.url+'reservation/add',reservation);
  }

  getAllReservations(idUser:any):Observable<reservation[]>{
    return this.http.get<reservation[]>(this.url+'reservation/getAllByUser/'+idUser);
  }

  
}
