import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  weather: Weather = {} as Weather;

  constructor(private httpClient: HttpClient) {
  }

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c';

  ngOnInit(): void {
    this.httpClient.get<WeatherApiResponse>(this.apiUrl)
      .subscribe(response => this.weather = response.main)
  }
}

interface WeatherApiResponse {
  main: Weather
}
