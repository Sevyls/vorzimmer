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

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TodolistComponent,
    GrocerylistComponent,
    PublictransportComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  providers: [
    CalendarService,
    WlMonitorService,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
