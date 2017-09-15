import { Component, OnInit, Input } from '@angular/core';

import { Appointment } from './../appointment';
import { AppointmentsService, Globals } from './../appointments.service';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.css']
})
export class AppointmentsViewComponent implements OnInit {
  @Input() searchString: string;

  today = new Date();

  constructor(
    private appointmentsService: AppointmentsService,
    public globals: Globals
  ) { }

  // delete this
  // getAppointments(): void {
  //   this.appointmentsService.getAppointments()
  //   // .then(appointments => this.appointments = appointments);
  //   .then(appointments => this.globals.appointments = appointments.map(appointment => {
  //     return {
  //       date: new Date(appointment.date),
  //       name: appointment.name,
  //       id: appointment.id
  //       };
  //   }));
  // }

  ngOnInit(): void {
    this.appointmentsService.getAppointments()
    .subscribe(appointments => this.globals.appointments = appointments
    );

  }

}
