import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { FilledComponent } from './filled/filled.component';
import { FlavoredComponent } from './flavored/flavored.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginGetComponent } from './login-get/login-get.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'chocolates',component:ChocolatesComponent},
  {path:'flavored',component:FlavoredComponent},
  {path:'filled',component:FilledComponent},
  {path:'gift',component:GiftsComponent},
  {path:'login',component:LoginComponent},
  {path:'login-get',component:LoginGetComponent},
  {path:'update/:id',component:UpdateComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
