import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Cors/Model/User';
import { HotelService } from 'src/app/Cors/Service/hotel.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myFormLogin:FormGroup;
  user:User=new User();
  tab:any=[];
  submittedLogin:Boolean=false;
  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private router:Router,private hotelService:HotelService) { }

  ngOnInit(): void {
    if(localStorage.getItem("User")!=null){
      this.router.navigate(['/hotels']);
    }
    this.user=new User();
    this.myFormLogin=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      Adresse:['',Validators.required],
      Phone:['',Validators.required],
      FullName:['',Validators.required]
    })
  }

  signup(){
    this.submittedLogin = true;
    if (this.myFormLogin.invalid) {
      return;
    }
    this.hotelService.signup(this.user).subscribe((res)=>{
      this.router.navigate(['/login']);
      this.toastr.success('Signup Successfully', 'Success');
    },(err)=>{
      this.toastr.error(err.error.message, 'Error');
    } );
  }
}
