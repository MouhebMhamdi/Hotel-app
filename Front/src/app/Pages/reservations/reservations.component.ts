import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from 'src/app/Cors/Model/Hotel';
import { reservation } from 'src/app/Cors/Model/Reservation';
import { HotelService } from 'src/app/Cors/Service/hotel.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:reservation[];
  term = '';
  p:any=1;
  constructor(private hotelService:HotelService,private modalService: NgbModal,private toastr: ToastrService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations(){
    let id=localStorage.getItem("idUser");
    this.hotelService.getAllReservations(id).subscribe((res)=>{
      this.reservations=res;
      
      console.log(this.reservations);
    })
  }
}
