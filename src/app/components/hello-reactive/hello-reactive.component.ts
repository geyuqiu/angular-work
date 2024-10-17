import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../validators/HelloValidators';

@Component({
  selector: 'app-hello-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hello-reactive.component.html',
  styleUrls: ['./hello-reactive.component.scss']
})
export class HelloReactiveComponent {
  userName = 'Max';
  nameForm: UntypedFormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.nameForm = this.formBuilder.group({
      name: [this.userName, [Validators.required, forbiddenNameValidator(['Alex', 'Max'])]]
    });
  }

  onSubmit() {
    this.userName = this.nameForm.get('name')?.value;
    console.log('userName: ', this.userName);
    this.submitted = true;
  }
}
