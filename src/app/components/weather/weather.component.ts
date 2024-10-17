import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';
import { EMPTY, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CelsiusPipe } from '../../pipes/celsius.pipe';

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
export class WeatherComponent implements OnInit {
  weather$: Observable<Weather> = EMPTY;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weather$ = this.weatherService.fetchWeather();
  }
}
