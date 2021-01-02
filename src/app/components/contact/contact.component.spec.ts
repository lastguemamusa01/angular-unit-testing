import {ComponentFixture, TestBed, async, waitForAsync} from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {DebugElement} from '@angular/core';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from '../about/about.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'contact page'`, waitForAsync(() => {
    expect(component.text).toEqual('contact page');
  }));

  it(`should set submitted to true`, waitForAsync(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it(`should call the onSubmit method`, () => {
    spyOn(component, 'onSubmit');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled(); // FAILS
  });


  it('name field validity', () => {
    const name = component.contactForm.controls.name;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('aada');
    expect(name.valid).toBeTruthy();
  });

});
