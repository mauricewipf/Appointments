import { Component, OnInit } from '@angular/core';

import { Appointment } from './../appointment';
import { AppointmentsService } from './../appointments.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.css']
})
export class AppointmentsViewComponent implements OnInit {
  today = new Date();
  appointments: Appointment[];

  public searchString: string;
  onChange(event) {
    this.searchString = event.text;
  }

  constructor(
    private appointmentsService: AppointmentsService,
  ) { }

  ngOnInit(): void {
    this.appointmentsService.getAppointments()
    .subscribe(appointments => this.appointments = appointments
    );
  }

}
