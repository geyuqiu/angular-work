import { Component, OnInit, Signal } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';
import { EMPTY, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CelsiusPipe } from '../../pipes/celsius.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    AsyncPipe,
    CelsiusPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weather: Signal<Weather | undefined>;

  constructor(private weatherService: WeatherService) {
    this.weather = toSignal(this.weatherService.fetchWeather());
  }
}
