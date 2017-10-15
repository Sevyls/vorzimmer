import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodolistComponent } from './todolist/todolist.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { PublictransportComponent } from './publictransport/publictransport.component';
import { CalendarService } from './calendar/calendar.service';
import { WlMonitorService } from './wl-monitor.service';
import { LOCALE_ID } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import {OpenWeatherApiService} from "./open-weather-api.service";
import { NavbarComponent } from './navbar/navbar.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TodolistComponent,
    GrocerylistComponent,
    PublictransportComponent,
    WeatherComponent,
    NavbarComponent,
    ForecastComponent,
    WeatherImageComponent,
    SettingsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CalendarService,
    WlMonitorService,
    OpenWeatherApiService,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
