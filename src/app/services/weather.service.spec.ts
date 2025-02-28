import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientMock: any;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj(['get']);
    service = new WeatherService(httpClientMock);
  });

  it('fetches WeatherData from API', (done) => {
    const expectedWeatherData = {temp: 7, temp_min: 1, temp_max: 10};
    const httpResponseMock = {body: {main: expectedWeatherData}};
    httpClientMock.get.and.returnValue(of(httpResponseMock));
    service.fetchWeather().subscribe(weatherData => {
      expect(weatherData).toEqual(expectedWeatherData);
      expect(httpClientMock.get).toHaveBeenCalledWith(
        'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric' as any,
        {observe: 'response'} as any
      );
      done();
    });
  });
});

