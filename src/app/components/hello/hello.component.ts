import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  @Input()
  name: string = '';

  displayName(): string {
    if (this.name) {
      return this.name;
    }
    return 'World';
    // return this.name || 'World'
  }
}
