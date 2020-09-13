import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { img } from 'src/assets/img/img-default'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form :FormGroup;
  mensajeError;

  constructor( private service:ServicesService, private fb:FormBuilder, private router:Router ) { 
    this.form = this.fb.group ({
      fullname: [''],
      nickname: [''],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: [''],
      image:   [''],
      applicantcode: [110439],
      birthdate: ['2000/12/12']      
    })

  }

  ngOnInit(): void {


  }

  confirmPassword(){
    let password1 = this.form.get('password').value
    let password2 = this.form.get('passwordConfirm').value
    if(password1 === password2){
      return true
    }
    else{
      this.mensajeError = 'verifica las contraseñas'
      return false
    }
    
  }

  crearUsuario(){
    
    let formData: any = new FormData();
    formData.append("fullname", this.form.get('fullname').value);
    formData.append("nickname", this.form.get('nickname').value);
    formData.append("email", this.form.get('email').value);
    formData.append("password", this.form.get('password').value);
    formData.append("applicantcode", this.form.get('applicantcode').value);
    formData.append("birthdate", this.form.get('birthdate').value);
    formData.append("image", img);
    
    if ( this.confirmPassword()){
      this.service.createUser(formData).subscribe(
        (resp:any)=> {  
            if(resp.code == 200){
              this.router.navigate(['login'])
            }
            else {this.mensajeError = resp.msg }
      
        } )
    }
  }

}
