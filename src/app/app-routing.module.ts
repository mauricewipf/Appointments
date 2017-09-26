import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentDetailViewComponent } from './appointment-detail-view/appointment-detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'appointments/:id',
    component: AppointmentDetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
