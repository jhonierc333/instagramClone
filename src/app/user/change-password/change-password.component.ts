import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  mensajeError;
  form : FormGroup;
  constructor(private service: ServicesService, private fb: FormBuilder, private router:Router) { 
      this.form = fb.group({
        token : [''],
        iduser : [''],
        password : [''],
        applicantcode: [110439],
        passwordConfirm: ['']
      })
  }

  ngOnInit(): void {
  }




  changePassword(){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    let formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("iduser", datos.iduser);
    formData.append("password", this.form.get('password').value);
    formData.append("applicantcode", this.form.get('applicantcode').value);

    if (this.confirmPassword() ){
    this.service.changePassword(formData).subscribe(
      (resp:any ) => {  
        console.log(resp) 
        if(resp.code == 200){
          this.router.navigate(['profile']);
        }
        else{
          this.mensajeError = resp.msg
        }})
  }}


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

}
