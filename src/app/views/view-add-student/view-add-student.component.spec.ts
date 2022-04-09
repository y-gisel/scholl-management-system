import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddStudentComponent } from './view-add-student.component';

describe('ViewAddStudentComponent', () => {
  let component: ViewAddStudentComponent;
  let fixture: ComponentFixture<ViewAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
