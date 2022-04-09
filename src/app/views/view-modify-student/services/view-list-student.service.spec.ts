import { TestBed } from '@angular/core/testing';
import { ViewModifyStudentService } from './view-modify-student.service';

describe('ViewModifyStudentService', () => {
  let service: ViewModifyStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewModifyStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
