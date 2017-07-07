import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherApiService} from "../open-weather-api.service";
import {Observable} from "rxjs/Observable";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  private weather$: Observable<any>;
  weather;

  private forecast$: Observable<any>;
  forecast;


  private weatherSubscription: Subscription;
  private forecastSubscription: Subscription;


  constructor(private weatherService: OpenWeatherApiService) {
    this.weatherService.apiKey = 'ce83aad2ddb82544dc41549df89d706e';

  }

  ngOnInit() {
    this.refresh();

    this.weatherSubscription = IntervalObservable.create(1000 * 60 * 15).subscribe(() => {
      this.showWeather();
    });

    this.forecastSubscription = IntervalObservable.create(1000 * 60 * 60).subscribe(() => {
      this.showForecast();
    })
  }

  refresh() {
    this.showWeather();
    this.showForecast();
  }

  ngOnDestroy() {
    this.weatherSubscription.unsubscribe();
    this.forecastSubscription.unsubscribe();
  }

  showWeather() {
    this.weatherService.getCurrentWeather().subscribe((weather) => {
      console.log(weather);
      this.weather = weather;
    });

    this.weather$
  }

  showForecast() {
    this.forecast$ = this.weatherService.getTodaysForecast();

    this.forecast$.subscribe((forecast) => {
      console.log(forecast);
      this.forecast = forecast;
    });
  }
}
