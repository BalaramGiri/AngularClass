import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddFormComponent } from './movie-add-form.component';

describe('MovieAddFormComponent', () => {
  let component: MovieAddFormComponent;
  let fixture: ComponentFixture<MovieAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
