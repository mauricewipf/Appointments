import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { AppointmentsViewComponent } from './appointments-view/appointments-view.component';
import { AppointmentsService, Globals } from './appointments.service';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent, NgbdModalComponent } from './modal/modal.component';

import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';

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
    NgbdModalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
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
