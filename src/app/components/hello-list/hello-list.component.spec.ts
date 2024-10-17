import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloListComponent } from './hello-list.component';
import { By } from '@angular/platform-browser';

describe('HelloListComponent', () => {
  let component: HelloListComponent;
  let fixture: ComponentFixture<HelloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows greetings for Paul, Robert and Matthias', () => {
    const paragraphDebugElements = fixture.debugElement.queryAll(By.css('p'));
    expect(paragraphDebugElements.length).toEqual(3);
    expect((paragraphDebugElements[0].nativeElement as HTMLElement).innerText).toEqual('Hello Manuela');
    expect((paragraphDebugElements[1].nativeElement as HTMLElement).innerText).toEqual('Hello Sebastian');
    expect((paragraphDebugElements[2].nativeElement as HTMLElement).innerText).toEqual('Hello Abiram');
  });
});
