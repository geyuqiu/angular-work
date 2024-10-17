import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';
import { HelloClickComponent } from './components/hello-click/hello-click.component';
import { NameInputComponent } from './components/name-input/name-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, HelloListComponent, HelloClickComponent, NameInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18';
}
