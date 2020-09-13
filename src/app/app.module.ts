import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './post/feed/feed.component';
import { UserComponent } from './user/user/user.component';
import { NavBarComponent } from './static/nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 

// Material Angular
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PostIdComponent } from './post/post-id/post-id.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    UserComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    PostIdComponent,
    PostCreateComponent,
    UserEditComponent,
    ChangePasswordComponent
  ],

  

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule, 
    MatDatepickerModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
