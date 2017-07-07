import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';


const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const FORECAST = 'forecast/daily';


@Injectable()
export class OpenWeatherApiService {

  constructor(private http: Http) { }

  private _apiKey: string;

  get apiKey(): string {
    return this._apiKey;
  }

  set apiKey(value: string) {
    this._apiKey = value;
  }

  getCurrentWeather() {
    const requestOptions: RequestOptions = this.createRequestOptions();
    return this.doGetRequest(WEATHER, requestOptions);
  }

  getTodaysForecast() {
    const requestOptions: RequestOptions = this.createRequestOptions();
    requestOptions.params.set('cnt', '11');
    return this.doGetRequest(FORECAST, requestOptions);
  }

  private doGetRequest(path: string, requestOptions: RequestOptions) {
    const url = BASE_URL + path;
    console.debug('Sending GET Request to ' + url);
    return this.http.get(url, requestOptions).map((response: Response) => response.json());
  }

  private createRequestOptions(): RequestOptions {
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.params = new URLSearchParams();
    requestOptions.params.set('APPID', this.apiKey);
    requestOptions.params.set('units', 'metric');
    requestOptions.params.set('q', 'Vienna');
    return requestOptions;
  }
}
