import { Component } from '@angular/core';
import { NameInputComponent } from '../name-input/name-input.component';

@Component({
  selector: 'app-hello-input',
  standalone: true,
  imports: [
    NameInputComponent
  ],
  templateUrl: './hello-input.component.html',
  styleUrl: './hello-input.component.scss'
})
export class HelloInputComponent {
  nameFromInput: string = '';

  handleNewName(newNameEvent: string) {
    this.nameFromInput = newNameEvent;
  }
}
