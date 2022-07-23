import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Cors/Model/User';
import { HotelService } from 'src/app/Cors/Service/hotel.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myFormLogin:FormGroup;
  user:User=new User();
  tab:any=[];
  submittedLogin:Boolean=false;
  constructor(private toastr: ToastrService,private formBuilder: FormBuilder,private router:Router,private hotelService:HotelService) { }

  ngOnInit(): void {
    if(localStorage.getItem("User")!=null){
      this.router.navigate(['/hotels']);
    }
    this.loadJsFile("assets/js/creative.js"); 
    this.loadJsFile("assets/js/bs-init.js"); 
    this.user=new User();
    this.myFormLogin=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  public loadJsFile(url:any) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }


  login(){
    this.submittedLogin = true;
    if (this.myFormLogin.invalid) {
      return;
    }
    this.hotelService.signin(this.myFormLogin.value).subscribe((res)=>{
      this.tab=res;
      localStorage.setItem("User",JSON.stringify(res));
      localStorage.setItem("FullName",this.tab['User'].FullName);
      localStorage.setItem("role",this.tab['User'].role);
      localStorage.setItem("email",this.tab['User'].email);
      localStorage.setItem("accessToken",this.tab['AccessToken']);
      localStorage.setItem("idUser",String(this.tab['User']._id));
      
      this.router.navigate(['/hotels']).then(() => {
        window.location.reload();
      });
      this.toastr.success('Login Successfully', 'Success');
    },(err)=>{
      this.toastr.error(err.error.message, 'Error');
    } );
  }
}
