import { TestBed } from '@angular/core/testing';

import { ViewListStudentService } from './view-list-student.service';

describe('ViewListStudentService', () => {
  let service: ViewListStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewListStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
