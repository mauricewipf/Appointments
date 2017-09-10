import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { AppointmentsService } from './appointments.service';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppointmentSearchPipe } from './appointment-search/appointment-search.pipe';
import { AppointmentOrderPipe } from './appointment-order.pipe';
// import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsViewComponent,
    // AppointmentSearchComponent,
    AppointmentSearchPipe,
    AppointmentOrderPipe,
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    FormsModule,
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
