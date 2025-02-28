import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { By } from '@angular/platform-browser';
import { WeatherComponent } from './weather.component';
import { CelsiusPipe } from '../../pipes/celsius.pipe';
import { MockPipe } from 'ng-mocks';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const expectedWeatherData
    = {temp: 7, temp_min: 0, temp_max: 10};
  let weatherServiceMock;

  beforeEach(async () => {
    weatherServiceMock = jasmine.createSpyObj(['fetchWeather']);
    weatherServiceMock.fetchWeather
      .and.returnValue(of(expectedWeatherData));
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent,
        MockPipe(CelsiusPipe, (value) => value + '_transformedByMockPipe')
      ],
      providers: [
        {provide: WeatherService, useValue: weatherServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows temperatures', () => {
    const temperatures = fixture.debugElement.queryAll(By.css('p'));
    expect(temperatures.length).toEqual(3);
    const actualTemperature = temperatures[0].nativeElement.innerText;
    const minTemperature = temperatures[1].nativeElement.innerText;
    const maxTemperature = temperatures[2].nativeElement.innerText;

    expect(actualTemperature).toEqual('Aktuelle Temperatur: 7_transformedByMockPipe');
    expect(minTemperature).toEqual('Min. Temperatur: 0_transformedByMockPipe');
    expect(maxTemperature).toEqual('Max Temperatur: 10_transformedByMockPipe');
  });
});
