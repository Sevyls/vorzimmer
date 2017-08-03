import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
declare var gapi: any;

const CALENDAR_URL: string = "https://calendar.google.com/calendar/ical/viktoria2017michael%40gmail.com/private-b9ce7debb98d042d71a476f920124ff2/basic.ics";
@Injectable()
export class CalendarService {

  constructor(private http: Http) {}
  items: Array<any> = [];

  readEntries() {
    let options = {
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    };

    let result: Promise<any> = gapi.client.calendar.events.list(options);
    result.then((response) => {
      this.items = response.result.items;
      console.log(this.items);
    });
    return result;
  }
}
