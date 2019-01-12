import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
import { AddDevsComponent } from './add-devs/add-devs.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'developers', component: DevelopersComponent},
  {path:'addDevs', component: AddDevsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
