import { Component, signal, Signal } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';
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
  weatherSignal: Signal<Weather | undefined>
    = signal<Weather | undefined>(undefined);

  constructor(private weatherService: WeatherService) {
    this.weatherSignal = toSignal(this.weatherService.fetchWeather());
  }
}
