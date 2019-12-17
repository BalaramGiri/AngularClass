import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieArrayComponent } from './movie-array.component';

describe('MovieArrayComponent', () => {
  let component: MovieArrayComponent;
  let fixture: ComponentFixture<MovieArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
