import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { HelloComponent } from './components/hello/hello.component';

export const routes: Routes = [
  {path: '', component: HelloComponent},
  {
    path: 'weather',
    component: WeatherComponent,
    // canActivate: [AuthenticatedGuardFn]
  },
  {path: '**', redirectTo: ''}
];
