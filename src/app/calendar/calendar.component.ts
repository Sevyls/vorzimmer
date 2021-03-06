import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarEntries;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.readEntries().then(response => this.calendarEntries = response.result.items);
  }

}
