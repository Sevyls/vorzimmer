import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

const STATIONS_URL = "https://abfahrtsmonitor.herokuapp.com/haltestellen"

@Injectable()
export class WlMonitorService {

  monitorIds: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(["219364357", "214550392"]);

  monitorIds$ = this.monitorIds.asObservable();

  constructor(private http: Http) { }

  loadStation(stationId:string) {
    let stationUrl = STATIONS_URL + "/" + stationId + ".json";

    return this.http.get(stationUrl).map((response: Response) => {
      return response.json();
    });
  }

  loadAllStations() {
    let allStationsUrl = STATIONS_URL + ".json";
    return this.http.get(allStationsUrl).map((response: Response) => {
      return response.json();
    });
  }

  addMonitor(id: string) {
    let monitorIds = this.monitorIds.getValue();
    monitorIds.push(id);
    this.monitorIds.next(monitorIds);
  }
}
