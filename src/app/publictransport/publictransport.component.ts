import { Component, OnInit } from '@angular/core';
import { WlMonitorService } from '../wl-monitor.service';
import { Subscription, Observable } from 'rxjs';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'publictransport',
  templateUrl: './publictransport.component.html',
  styleUrls: ['./publictransport.component.css']
})
export class PublictransportComponent implements OnInit {
  haltestelle;

  private monitorSubscription: Subscription;

  constructor(private wlMonitorService: WlMonitorService) {
      this.monitorSubscription = IntervalObservable.create(5000).subscribe(x => this.list());
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.wlMonitorService.loadStation("219364357").subscribe(
      (json) => {
        console.log(json);
        this.haltestelle = json;
      }
    );
  }

  ngOnDestroy() {
    this.monitorSubscription.unsubscribe();
  }

}
