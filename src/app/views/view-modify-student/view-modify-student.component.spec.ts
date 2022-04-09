import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModifyStudentComponent } from './view-modify-student.component';

describe('ViewModifyStudentComponent', () => {
  let component: ViewModifyStudentComponent;
  let fixture: ComponentFixture<ViewModifyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModifyStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModifyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
