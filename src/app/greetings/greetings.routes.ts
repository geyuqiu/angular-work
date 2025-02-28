import { Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { HelloReactiveComponent } from './components/hello-reactive/hello-reactive.component';

export const helloRoutes: Routes = [
  {path: '', component: HelloComponent},
  {
    path: 'reactive/:name',
    component: HelloReactiveComponent,
  }
]
