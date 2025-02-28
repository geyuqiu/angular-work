import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hello-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hello-list.component.html',
  styleUrl: './hello-list.component.scss'
})
export class HelloListComponent {
  names: string[] = ['Manuela', 'Sebastian', 'Abiram'];

}
