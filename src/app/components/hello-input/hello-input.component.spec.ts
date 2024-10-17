import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInputComponent } from './hello-input.component';

describe('HelloInputComponent', () => {
  let component: HelloInputComponent;
  let fixture: ComponentFixture<HelloInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
