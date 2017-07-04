import { TestBed, inject } from '@angular/core/testing';

import { WlMonitorService } from './wl-monitor.service';

describe('WlMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WlMonitorService]
    });
  });

  it('should be created', inject([WlMonitorService], (service: WlMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
