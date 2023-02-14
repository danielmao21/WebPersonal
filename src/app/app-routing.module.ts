import { NgModule } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path:'',
    component: SliderComponent,

  },
  {
    path:'aboutme',
    component: AboutmeComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
  {
    path:'proyectos',
    component: ProyectosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
