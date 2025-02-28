import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'hello',
    loadChildren: () => import('./greetings/greetings.routes').then(mod => mod.helloRoutes)
  },
  {path: '**', redirectTo: ''}
];
