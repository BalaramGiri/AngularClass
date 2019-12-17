import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoloyeeComponent } from './empoloyee.component';

describe('EmpoloyeeComponent', () => {
  let component: EmpoloyeeComponent;
  let fixture: ComponentFixture<EmpoloyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpoloyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
