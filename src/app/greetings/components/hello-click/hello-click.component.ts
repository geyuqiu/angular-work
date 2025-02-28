import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hello-click',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hello-click.component.html',
  styleUrl: './hello-click.component.scss'
})
export class HelloClickComponent {
  buttonWasClicked: boolean = false;

  sayHello(): void{
    this.buttonWasClicked = !this.buttonWasClicked;
  }
}
