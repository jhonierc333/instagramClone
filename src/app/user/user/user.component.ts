import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataUser;
  listPost;
  baseUrl = 'http://apibitwanv1.tk/public/uploads/110439/users';
  baseUrlPost = 'http://apibitwanv1.tk/public/uploads/110439/posts';

  constructor( private service:ServicesService) { }

  ngOnInit(): void {
    this.profile()
    this.posts()

  }

  profile(){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    var formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("iduser", datos.iduser);
    formData.append("applicantcode", 110439);
    this.service.userId(formData).subscribe( (
      resp:any) => {
        console.log(resp)
        this.dataUser = resp.data
    })
  }


  posts(){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    let formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("iduser", datos.iduser);
    formData.append("applicantcode", 110439);
    this.service.postsIduser(formData).subscribe(
      (resp:any) => {
        console.log(resp)
          this.listPost = resp.data ;
      })

      
  }

  eliminarPost(post){
    let datos = JSON.parse(localStorage.getItem('datosUser'))
    let formData: any = new FormData();
    formData.append("token", datos.token);
    formData.append("idpost", post.idpost);
    formData.append("applicantcode", 110439);

    swal.fire({      
      text: "¿seguro desea eliminar esta publicación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: 'black',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletePost(formData).subscribe(
          (resp:any) => {
            if(resp.code == 200){              
              this.eliminarObjeto(this.listPost, post)
              // this.listPost.splice(post, 1);
              swal.fire({           
                text: "La publicacion fue eliminada correctamente.",
                icon: "success"
              })
            }
          }
        )  
      }
    })


  }

  eliminarObjeto( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

}

