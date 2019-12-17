import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsDetailsComponent } from './comments-details.component';

describe('CommentsDetailsComponent', () => {
  let component: CommentsDetailsComponent;
  let fixture: ComponentFixture<CommentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
