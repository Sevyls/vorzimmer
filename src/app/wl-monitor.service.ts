import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const STATIONS_URL = "https://abfahrtsmonitor.herokuapp.com/haltestellen"

@Injectable()
export class WlMonitorService {

  constructor(private http: Http) { }

  loadStation(stationId:string) {
    let stationUrl = STATIONS_URL + "/" + stationId + ".json";

    return this.http.get(stationUrl).map((response: Response) => {
      return response.json();
    });
  }

}
