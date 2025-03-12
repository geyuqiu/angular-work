import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { SpnComponent } from './components/spn/spn.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: SpnComponent,
  },
  {
    path: 'hello',
    loadChildren: () => import('./greetings/greetings.routes').then(mod => mod.helloRoutes)
  },
  {path: '**', redirectTo: ''}
];
