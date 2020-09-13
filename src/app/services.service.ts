import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {


  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Access-Control-Allow-Origin': '*', 
      'Server':'keep-alive', 
      'Content-Encoding':'gzip',
    })
  };

  constructor( private __httpClient : HttpClient) {
    
  }

  // users
  public createUser(form){
    return this.__httpClient.post(`public/users/create`, form);
  } 

  public login(form){
    console.log(form)
    return this.__httpClient.post(`public/login`, form )
  }

  public userId(form){
    return this.__httpClient.post('public/users/viewbyid', form)
  }

  public editUser(form){
    return this.__httpClient.post('public/users/edit', form)
  }

  public changePassword(form){
    return this.__httpClient.post('public/users/changepassword', form)
  }

  // posts
  public postId(form){
    return this.__httpClient.post('public/posts/viewbyid', form)
  }

  public postsIduser(form){
    return this.__httpClient.post('public/posts/viewbyiduser', form)
  }

  public addPost(form){
    return this.__httpClient.post('public/posts/create', form)
  }

  public editPost(form){
    return this.__httpClient.post('public/posts/edit', form)
  }

  public deletePost(form){
    return this.__httpClient.post('public/posts/delete', form)
  }

  // comments

  public commentsIdPost(form){
    return this.__httpClient.post('public/comments/viewbypost', form)
  }

  public addComment(form){
    return this.__httpClient.post('public/comments/create', form)
  }

  public deleteComment(form){
    return this.__httpClient.post('public/comments/delete', form)
  }


  // image

  public uploadPost( applicantcode, userid, image ){
    return this.__httpClient.get(`public/uploads/${applicantcode}/users/${userid}/${image}` )
  }


}
