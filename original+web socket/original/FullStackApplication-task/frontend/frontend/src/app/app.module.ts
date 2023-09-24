import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RegisterComponent } from './components/register/register.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CreateuserdetailsserviceComponent } from './components/createuserdetailsservice/createuserdetailsservice.component';
import { UserdetaillistComponent } from './components/userdetaillist/userdetaillist.component';
import { UpdateuserdetailsComponent } from './components/updateuserdetails/updateuserdetails.component';
import { UserdetailshomepageComponent } from './components/userdetailshomepage/userdetailshomepage.component';
import { CommunicationDataComponent } from './components/communication-data/communication-data.component';
import { PersonaldetailshomepageComponent } from './components/personaldetailshomepage/personaldetailshomepage.component';
import { CreatepersonaldetailsComponent } from './components/createpersonaldetails/createpersonaldetails.component';
import { UpdatepersonaldeatilsComponent } from './components/updatepersonaldeatils/updatepersonaldeatils.component';
import { PersonaldetailslistComponent } from './components/personaldetailslist/personaldetailslist.component';
import { ProducthomepageComponent } from './components/producthomepage/producthomepage.component';
import { CreateProductDetailsComponent } from './components/create-product-details/create-product-details.component';
import { ProductdetailListComponent } from './components/productdetail-list/productdetail-list.component';
import { UpdateProductdetailsComponent } from './components/update-productdetails/update-productdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { GetuserbillbyemailidComponent } from './components/getuserbillbyemailid/getuserbillbyemailid.component';
import { UserbillComponent } from './components/userbill/userbill.component';
import { WebsocketService } from './services/websocket.service';
















@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    CreateuserdetailsserviceComponent,
    UserdetaillistComponent,
    UpdateuserdetailsComponent,
    UserdetailshomepageComponent,
    CommunicationDataComponent,
    PersonaldetailshomepageComponent,
    CreatepersonaldetailsComponent,
    UpdatepersonaldeatilsComponent,
    PersonaldetailslistComponent,
    ProducthomepageComponent,
    CreateProductDetailsComponent,
    ProductdetailListComponent,
    UpdateProductdetailsComponent,
 
    GetuserbillbyemailidComponent,
    UserbillComponent

    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule




  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
