import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormBuilder, FormGroup } from '@angular/forms' ;
import { Router } from '@angular/router';
import { temporal} from 'src/assets/img/img-temporal'


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  form:FormGroup;
  mensajeError;
  constructor(private service:ServicesService, private fb:FormBuilder, private router:Router ) { 
    this.form = fb.group({
      token:[''],
      iduser:[''],
      nickname:[''],
      fullname:[''],
      birthdate:[''],
      image:[''],
      applicantcode:[110439],
    })
  }

  ngOnInit(): void {

    
  }

  editUser(e){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    let formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("iduser", datos.iduser);
    formData.append("fullname", this.form.get('fullname').value);
    formData.append("nickname", this.form.get('nickname').value);    
    formData.append("applicantcode", this.form.get('applicantcode').value);
    formData.append("birthdate", this.form.get('birthdate').value);

    let file = e.target.files[0]; 
    let reader = new FileReader();
    reader.onloadend = function(){
      let ej:any = reader.result
      localStorage.setItem('base', ej )
    }
    reader.readAsDataURL(file)

    formData.append("image", temporal);

    this.service.editUser(formData).subscribe(
      (resp:any) =>{ 
        if(resp.code == 200){
          this.router.navigate(['profile'])
        }
        else{
          this.mensajeError = resp.msg;
        }
    })    
  }

}
