import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

const CALENDAR_URL: string = "https://calendar.google.com/calendar/ical/viktoria2017michael%40gmail.com/private-b9ce7debb98d042d71a476f920124ff2/basic.ics";
@Injectable()
export class CalendarService {

  constructor(private http: Http) {}

  readEntries() {
    //this.loadIcsFile();
    return [{summary: "Test"}, {summary: "Blubb"}];
  }

  private loadIcsFile() {
    console.log("loadIcsFile");
    let headers = new Headers({'Access-Control-Request-Origin': 'http://localhost:4200'});

    this.http.options(CALENDAR_URL, {headers: headers}).subscribe((response: Response) => {
      console.log(response);
      this.http.get(CALENDAR_URL, {headers: headers}).subscribe((response: Response) => {
        console.log(response.status);
        return response.bytesLoaded;
      });
    });
  }

}
