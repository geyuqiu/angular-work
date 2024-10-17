import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { HelloComponent } from './components/hello/hello.component';
import { HelloReactiveComponent } from './components/hello-reactive/hello-reactive.component';

export const routes: Routes = [
  {path: '', component: HelloComponent},
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'reactive',
    component: HelloReactiveComponent,
  },
  {path: '**', redirectTo: ''}
];
