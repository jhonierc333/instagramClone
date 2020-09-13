import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  mensajeError;
  

  constructor(  private servicio:ServicesService, private fb:FormBuilder, private router:Router ) {
    this.form = this.fb.group({
      applicantcode: [110439], 
      email:['' , [Validators.required, Validators.email] ],
      password:['']
    })
   }

  ngOnInit(): void {
    
  }

  login(){    
    var formData: any = new FormData();
    formData.append("password", this.form.get('password').value);
    formData.append("email", this.form.get('email').value);
    formData.append("applicantcode", this.form.get('applicantcode').value);
     
    this.servicio.login(formData).subscribe(  
      (resp:any) => {
        if (resp.code == 200){
          let datosUser = { 'token' : resp.data.token, 'iduser' : resp.data.iduser, 'image':resp.data.image }
          localStorage.setItem('datosUser', JSON.stringify(datosUser));
          this.router.navigate(['feed']);
          
        }
        else{
          this.mensajeError = resp.msg
        }
      }       
  )}

}
