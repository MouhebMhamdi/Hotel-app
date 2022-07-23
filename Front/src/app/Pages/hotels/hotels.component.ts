import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Cors/Model/Hotel';
import { HotelService } from 'src/app/Cors/Service/hotel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { reservation } from 'src/app/Cors/Model/Reservation';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels:Hotel[];
  term = '';
  myFormLogin:FormGroup;
  submittedLogin:Boolean=false;
  reservation:reservation;
  idHotel:any;
  p:any=1;
  constructor(private hotelService:HotelService,private modalService: NgbModal,private toastr: ToastrService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loadJsFile("assets/js/creative.js"); 
    this.loadJsFile("assets/js/bs-init.js"); 
    this.getAllHotels();
    this.reservation=new reservation();
    this.myFormLogin=this.formBuilder.group({
      startDate:['',[Validators.required]],
      endDate:['',Validators.required],
      nbr_rooms:['',Validators.required],
      nbrShildren:['',Validators.required],
      nbrAdults:['',Validators.required],
      hotel:['',],
      user:[Number(localStorage.getItem("idUser"))]
    })
  }
  public loadJsFile(url:any) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }

  getAllHotels(){
    this.hotelService.getHotels().subscribe(
      data=>{
        this.hotels=data;
      }
    )
  }
  close(content:any) {
    this.getAllHotels();
    
  }
  click(idHotel:number,content:any){
    
    let id=Number(localStorage.getItem("idUser"));
    if(localStorage.getItem("idUser")==null){
      this.router.navigate(['/login']);
      return;
    }
    this.idHotel=idHotel;
    this.opencontent(content);
  }

  addReservation(){
    this.submittedLogin = true;
    if (this.myFormLogin.invalid) {
      return;
    }
    let data={
      startDate:this.myFormLogin.value.startDate, 
      endDate:this.myFormLogin.value.endDate,
      nbr_rooms:this.myFormLogin.value.nbr_rooms,
      nbrShildren:this.myFormLogin.value.nbrShildren,
      nbrAdults:this.myFormLogin.value.nbrAdults,
      hotel:this.idHotel,
      user:localStorage.getItem("idUser")
    }
   
   this.hotelService.addReservation(data).subscribe((res)=>{
      this.toastr.success('Reservation added successfully', 'Success');
      this.router.navigate(['/hotels']);
   },(err)=>{
      this.toastr.error(err.error.message, 'Error');
   })
  }
  opencontent(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res:any) => {
    
    }, (reason:any) => {
      this.getAllHotels();
      
    });
  }
}
