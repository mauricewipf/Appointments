import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { AppointmentsService, Globals } from './appointments.service';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent, NgbdModalComponent } from './modal/modal.component';

import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';
import { AppointmentDetailViewComponent } from './appointment-detail-view/appointment-detail-view.component';
import { HomeComponent } from './home/home.component';

// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsViewComponent,
    // SearchComponent,
    SearchPipe,
    OrderByPipe,
    NgbdModalContentComponent,
    NgbdModalComponent,
    AppointmentDetailViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    // HttpModule,
    // FormsModule,
    // NgbModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
  ],
  providers: [AppointmentsService, Globals],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContentComponent]
})
export class AppModule { }
