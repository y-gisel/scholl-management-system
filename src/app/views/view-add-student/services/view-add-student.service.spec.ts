import { TestBed } from '@angular/core/testing';

import { ViewAddStudentService } from './view-add-student.service';

describe('ViewAddStudentService', () => {
  let service: ViewAddStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAddStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
