import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { AppointmentsService } from './appointments.service';
import { AuthService } from './auth.service';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent, NgbdModalComponent } from './modal/modal.component';

import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';
import { AppointmentDetailViewComponent } from './appointment-detail-view/appointment-detail-view.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsSearchComponent } from './appointments-search/appointments-search.component';
import { UserProfileComponent, DeleteAccountModalContentComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsViewComponent,
    SearchPipe,
    OrderByPipe,
    NgbdModalContentComponent,
    NgbdModalComponent,
    AppointmentDetailViewComponent,
    HomeComponent,
    AppointmentsSearchComponent,
    UserProfileComponent,
    DeleteAccountModalContentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    AppointmentsService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalContentComponent,
    DeleteAccountModalContentComponent
  ]
})
export class AppModule { }
