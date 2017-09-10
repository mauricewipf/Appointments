import { Component, OnInit, Input } from '@angular/core';

import { Appointment } from './../appointment';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css'],
})
export class AppointmentSearchComponent implements OnInit {
  @Input() searchString: string;

  constructor() {this.searchString = ''; }

  ngOnInit() {
  }

  getSearchString(): string {
    return this.searchString;
  }

}
