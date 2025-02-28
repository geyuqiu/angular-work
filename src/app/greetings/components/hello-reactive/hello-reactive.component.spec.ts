import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloReactiveComponent } from './hello-reactive.component';
import { By } from '@angular/platform-browser';

describe('HelloReactiveComponent', () => {
  let component: HelloReactiveComponent;
  let fixture: ComponentFixture<HelloReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloReactiveComponent]
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
    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLElement;
    submitButton.click();
    fixture.detectChanges();
    expect(component.name).toEqual('Danny');
    const greeting: HTMLElement = fixture.debugElement.query(By.css('#greeting')).nativeElement;
    expect(greeting.innerText).toEqual('Hallo Danny');
  });

  it('name must be given', () => {
    component.nameForm.controls['name'].setValue('');
    expect(component.nameForm.valid).toBeFalsy();
    expect(component.nameForm.controls['name'].errors!['required']).toBeTruthy();
    fixture.detectChanges();
  });
});
