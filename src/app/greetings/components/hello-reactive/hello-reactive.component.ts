import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../../validators/HelloValidators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hello-reactive.component.html',
  styleUrls: ['./hello-reactive.component.scss']
})
export class HelloReactiveComponent {
  name = 'Max';
  nameForm: UntypedFormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder,
              private readonly route: ActivatedRoute
  ) {
    this.nameForm = this.formBuilder.group({
      name: this.formBuilder.control(
        [this.name],
        [Validators.required, forbiddenNameValidator(['Alex', 'Max'])]
      )
    });

    console.log(this.route.params);
    this.route.params.subscribe(
      params => {
        if (params['name']) {
          this.nameForm.patchValue({name: params['name']});
        }
      }
    );
  }

  onSubmit() {
    this.name = this.nameForm.get('name')?.value;
    console.log('name: ', this.name);
    this.submitted = true;
  }
}
