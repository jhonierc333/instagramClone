
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  baseUrl = 'http://apibitwanv1.tk/public/uploads/110439/users';
  datos;
  constructor( private router : Router  ) {
    this.datos = JSON.parse(localStorage.getItem('datosUser'))  
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem('datosUser')
    this.router.navigate(['login'])
    
  }


 

}
