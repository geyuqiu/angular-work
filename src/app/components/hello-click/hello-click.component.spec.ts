import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloClickComponent } from './hello-click.component';

describe('HelloClickComponent', () => {
  let component: HelloClickComponent;
  let fixture: ComponentFixture<HelloClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
