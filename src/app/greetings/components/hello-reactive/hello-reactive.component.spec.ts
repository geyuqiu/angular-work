import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloReactiveComponent } from './hello-reactive.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

describe('HelloReactiveComponent', () => {
  let component: HelloReactiveComponent;
  let fixture: ComponentFixture<HelloReactiveComponent>;

  beforeEach(async () => {
    let mockActivatedRoute = {
      params:  new Subject().asObservable(), // Use the Subject as an observable
    };
    await TestBed.configureTestingModule({
      imports: [HelloReactiveComponent, ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Provide mock
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('greet Danny', () => {
    component.nameForm.controls['name'].setValue('Danny');
    fixture.detectChanges();
    const submitButton = fixture.debugElement
      .query(By.css('button')).nativeElement as HTMLElement;

    submitButton.click();
    fixture.detectChanges();

    expect(component.name).toEqual('Danny');
    const greeting: HTMLElement = fixture.debugElement
      .query(By.css('#greeting')).nativeElement;
    expect(greeting.innerText).toEqual('Hallo Danny');
  });

  it('name must be given', () => {
    component.nameForm.controls['name'].setValue('');
    expect(component.nameForm.valid).toBeFalsy();
    expect(component.nameForm.controls['name'].errors!['required']).toBeTruthy();
    fixture.detectChanges();
  });
});
