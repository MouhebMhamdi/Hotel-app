import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   data:any;
  constructor() { }

  ngOnInit(): void {
    this.loadJsFile("assets/js/creative.js"); 
    this.loadJsFile("assets/js/bs-init.js"); 
    this.data=JSON.parse(JSON.stringify(localStorage.getItem("User")));
  }
  public loadJsFile(url:any) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

  logout(){
    localStorage.removeItem("User");
    localStorage.removeItem("FullName");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idUser");
    window.location.reload();
  }
}
