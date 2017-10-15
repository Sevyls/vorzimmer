import { Component, OnInit, OnDestroy } from '@angular/core';
import { WlMonitorService } from '../wl-monitor.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  allStations;
  allStationsKeys;
  selectedId;
  monitorIds;
  subscription: Subscription;

  constructor(private wlMonitorService: WlMonitorService) { }

  ngOnInit() {
    this.wlMonitorService.loadAllStations().subscribe(
      (json) => {
        this.allStations = json;
        this.allStationsKeys = Object.keys(this.allStations);
      }
    );

    this.subscription = this.wlMonitorService.monitorIds$.subscribe(
      monitorIds => {
        this.monitorIds = monitorIds;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addMonitor(id) {
    console.log(id);
    this.wlMonitorService.addMonitor(id);
  }
}
