import { Component, OnInit, Input } from '@angular/core';
import { WlMonitorService } from '../wl-monitor.service';
import { Subscription, Observable } from 'rxjs';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'publictransport',
  templateUrl: './publictransport.component.html',
  styleUrls: ['./publictransport.component.css']
})
export class PublictransportComponent implements OnInit {
  @Input()
  haltestelleId: string;

  haltestelle;

  private monitorSubscription: Subscription;

  constructor(private wlMonitorService: WlMonitorService) {
      this.monitorSubscription = IntervalObservable.create(5000).subscribe(x => this.list());
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.wlMonitorService.loadStation(this.haltestelleId).subscribe(
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
