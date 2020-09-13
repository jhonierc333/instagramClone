import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './post/feed/feed.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { LoginGuard } from './login.guard';




const routes: Routes = [
  {path: 'signup', component:SignUpComponent },
  {path: 'login', component:LoginComponent},
  {path: 'feed', component: FeedComponent,  canActivate: [LoginGuard]},
  {path: 'profile', component: UserComponent, canActivate: [LoginGuard]}, 
  {path: 'userEdit', component: UserEditComponent, canActivate: [LoginGuard]}, 
  {path: 'changePassword', component:ChangePasswordComponent, canActivate: [LoginGuard]},
  {path: 'createPost', component:PostCreateComponent, canActivate: [LoginGuard]},
  {path: 'editPost', component:PostCreateComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: 'login'  },
  {path: '', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
