import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointments-search',
  templateUrl: './appointments-search.component.html',
  styleUrls: ['./appointments-search.component.css']
})
export class AppointmentsSearchComponent implements OnInit {

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
