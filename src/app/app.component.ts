import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs';
import { Subscription }   from 'rxjs/Subscription';
import { WlMonitorService } from './wl-monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  subscription: Subscription;

  monitorIds;

  constructor(private wlMonitorService: WlMonitorService) {}

  ngOnInit() {
    this.subscription = this.wlMonitorService.monitorIds$.subscribe(
      monitorIds => {
        this.monitorIds = monitorIds;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  currentTime = Observable.interval(1000).map(x => new Date()).share();
}
