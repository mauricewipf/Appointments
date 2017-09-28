import { Component, OnInit } from '@angular/core';

import { Appointment } from './../appointment';
import { AppointmentsService } from './../appointments.service';

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

  // delete this
  // getAppointments(): void {
  //   this.appointmentsService.getAppointments()
  //   // .then(appointments => this.appointments = appointments);
  //   .then(appointments => this.appointments = appointments.map(appointment => {
  //     return {
  //       date: new Date(appointment.date),
  //       name: appointment.name
  //       };
  //   }));
  // }

  ngOnInit(): void {
    this.appointmentsService.getAppointments()
    .subscribe(appointments => this.appointments = appointments
    );
  }

}
