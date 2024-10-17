import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class HelloInputComponent implements OnInit{
  nameFromInput: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nameFromInput = params['name'];
    });
  }

  handleNewName(newNameEvent: string) {
    this.nameFromInput = newNameEvent;
  }
}
