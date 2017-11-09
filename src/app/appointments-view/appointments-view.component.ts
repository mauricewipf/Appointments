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
  holidays = [];

  public searchString: string;
  onChange(event) {
    this.searchString = event.text;
  }

  constructor(
    private appointmentsService: AppointmentsService,
  ) { }

  ngOnInit(): void {
    this.appointmentsService.getAppointments()
    .subscribe(appointments => this.appointments = appointments);

    this.appointmentsService.getHolidays().subscribe(res => {
      this.holidays = res.json().data;

      console.log(this.isHoliday(new Date('2017-11-01')));
    });


  }

  isHoliday(date): boolean {
    for (let i = 0; i < this.holidays.length; i++) {
      console.log(new Date(this.holidays[i]).getTime());
      console.log(date.getTime());

      if ( date.getTime() === new Date(this.holidays[i]).getTime()) {
        return true;
      }
    }
    return false;
  }
}
