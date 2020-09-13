import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { temporal } from 'src/assets/img/img-temporal'


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;
  mensajeError;
  idpost;
  
  
  constructor(   private service:ServicesService, private fb:FormBuilder, 
                private router:Router, private activatedRoute:ActivatedRoute
                  ) { 
    this.form = this.fb.group({
      token : [''],
      iduser : [],
      description : [''],      
      applicantcode : [110439],
      image: ['']
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {      
     this.idpost = params.idpost
    });
    
    
  }

  
  editPost(){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    let formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("idpost", this.idpost);
    formData.append("description", this.form.get('description').value);
    formData.append("applicantcode", this.form.get('applicantcode').value);


    this.service.editPost(formData).subscribe( 
      (resp:any) => { 
        if( resp.code == 200 ){
          this.router.navigate(['profile'])
        }
    })
  }

  
  createPost(e ){
    let formData: any = new FormData();
    
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    
    formData.append("token", datos.token);
    formData.append("iduser", datos.iduser);
    formData.append("description", this.form.get('description').value);
    formData.append("applicantcode", this.form.get('applicantcode').value);
    

    let file = e.target.files[0]; 
    let reader = new FileReader();
    reader.onloadend = function(){
      let ej:any = reader.result
      localStorage.setItem('base', ej )
    }
    reader.readAsDataURL(file)

    formData.append("image", temporal);
    this.service.addPost(formData).subscribe(
      (resp:any) => { 
        localStorage.removeItem('base')
        console.log(resp)
        if(resp.code == 200){
          this.router.navigate(['feed']);
        }
        else{
          this.mensajeError = resp.msg
        }
    })
  }

 

  
  
  

  

  

  

}
