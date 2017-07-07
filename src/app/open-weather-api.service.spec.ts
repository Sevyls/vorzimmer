import { TestBed, inject } from '@angular/core/testing';

import { OpenWeatherApiService } from './open-weather-api.service';

describe('OpenWeatherApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherApiService]
    });
  });

  it('should be created', inject([OpenWeatherApiService], (service: OpenWeatherApiService) => {
    expect(service).toBeTruthy();
  }));
});
