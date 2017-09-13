import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { AppointmentsService, Globals } from './appointments.service';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent, NgbdModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsViewComponent,
    // SearchComponent,
    SearchPipe,
    OrderByPipe,
    NgbdModalContentComponent,
    NgbdModalComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [AppointmentsService, Globals],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContentComponent]
})
export class AppModule { }
