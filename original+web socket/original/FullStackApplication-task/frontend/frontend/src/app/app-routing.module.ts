import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateuserdetailsserviceComponent } from './components/createuserdetailsservice/createuserdetailsservice.component';
import { UserdetaillistComponent } from './components/userdetaillist/userdetaillist.component';
import { UpdateuserdetailsComponent } from './components/updateuserdetails/updateuserdetails.component';
import { UserdetailshomepageComponent } from './components/userdetailshomepage/userdetailshomepage.component';
import { CommunicationDataComponent } from './components/communication-data/communication-data.component';
import { AuthService } from './services/auth.service';
import { PersonaldetailshomepageComponent } from './components/personaldetailshomepage/personaldetailshomepage.component';
import { CreatepersonaldetailsComponent } from './components/createpersonaldetails/createpersonaldetails.component';
import { PersonaldetailslistComponent } from './components/personaldetailslist/personaldetailslist.component';
import { UpdatepersonaldeatilsComponent } from './components/updatepersonaldeatils/updatepersonaldeatils.component';
import { ProducthomepageComponent } from './components/producthomepage/producthomepage.component';
import { CreateProductDetailsComponent } from './components/create-product-details/create-product-details.component';
import { UpdateProductdetailsComponent } from './components/update-productdetails/update-productdetails.component';
import { ProductdetailListComponent } from './components/productdetail-list/productdetail-list.component';
import { UserbillComponent } from './components/userbill/userbill.component';
import { GetuserbillbyemailidComponent } from './components/getuserbillbyemailid/getuserbillbyemailid.component';






const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'userdetailslist',
    component: UserdetaillistComponent,
    pathMatch: 'full',
    canActivate: [AuthService],

  }
  ,
  {
    path: 'createuserdetails',
    component: CreateuserdetailsserviceComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'updateuserdetails/:emailId',
    component: UpdateuserdetailsComponent,
    canActivate: [AuthService],
   
  },
  {
    path: '',
    redirectTo: 'userdetailslist',
    pathMatch: 'full',
    
  },
  {
    path:'userdetailshome',
    component:UserdetailshomepageComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path:'communication',
    component:CommunicationDataComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path:'personaldetailshomepage',
    component:PersonaldetailshomepageComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path:'createpersonaldetails',
    component:CreatepersonaldetailsComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path:'personaldetailslist',
    component:PersonaldetailslistComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path: 'updatepersonaldetails/:emailId',
    component: UpdatepersonaldeatilsComponent ,
    canActivate: [AuthService],
    
  },
  {
    path:'producthomepage',
    component:ProducthomepageComponent,
    pathMatch:'full',
    canActivate: [AuthService],

  },
  {
    path:'createproduct',
    component:CreateProductDetailsComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path: 'updateproduct/:emailId',
    component: UpdateProductdetailsComponent,
    canActivate: [AuthService],
  },
  
  {
    path:'productlist',
    component:ProductdetailListComponent,
    pathMatch:'full',
    canActivate: [AuthService],
  },
  {
    path:'userbill',
    component :UserbillComponent,
    pathMatch:'full',
  },
  {
    path:'getuserbill/:emailId',
    component:GetuserbillbyemailidComponent,
    pathMatch:'full',
  }




]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
