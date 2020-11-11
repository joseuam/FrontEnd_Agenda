import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import{UpdateComponent} from './update/update.component';
import { CreateComponent } from './create/create.component';





const routes: Routes = [

	{path:'' , component: MainComponent},
	{path:'main' , component: MainComponent},
	{path:'edicion/:id',component:UpdateComponent},
	{path:'crear',component:CreateComponent},
	{path:'predetermi',component:UpdateComponent}
	

	



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
