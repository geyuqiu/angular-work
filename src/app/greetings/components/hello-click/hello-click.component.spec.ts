import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloClickComponent } from './hello-click.component';
import { By } from '@angular/platform-browser';

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

  it('trigger click by component instance', () => {
    expect(component.buttonWasClicked).toBeFalsy();
    component.sayHello();
    expect(component.buttonWasClicked).toBeTruthy();
  });

  it('emulate click', () => {
    expect(component.buttonWasClicked).toBeFalsy();

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(component.buttonWasClicked).toBeTruthy();
    fixture.detectChanges(true);
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toEqual('Hello World');
  });
});
