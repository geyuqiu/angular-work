import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInputComponent } from './hello-input.component';
import { By } from '@angular/platform-browser';
import { NameInputComponent } from '../name-input/name-input.component';
import { MockComponent } from 'ng-mocks';

describe('HelloInputComponent', () => {
  let component: HelloInputComponent;
  let fixture: ComponentFixture<HelloInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloInputComponent, MockComponent(NameInputComponent)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows hello at beginning', () => {
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toContain('Hello');
  });

  it('trigger handleNewName', () => {
    component.handleNewName('Max Mustermann');
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toEqual('Hello Max Mustermann');
  });

  it('trigger new name by output', () => {
    const nameInput = fixture.debugElement
      .query(By.directive(NameInputComponent))
      .componentInstance as NameInputComponent;
    nameInput.nameSubmitted.emit('Max Mustermann');
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toEqual('Hello Max Mustermann');
  });
});
