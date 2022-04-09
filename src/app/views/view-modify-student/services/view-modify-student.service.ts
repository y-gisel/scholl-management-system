import { Injectable } from '@angular/core';
import { ApiRestService } from 'src/app/core/services/rest/api-rest.service';
import { IntModifyStudent } from '../schemas/view-modify-student.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewModifyStudentService {
  constructor(private apiRestService: ApiRestService) {}

  modifyStudent(url: string, body: IntModifyStudent) {
    return this.apiRestService.put(url, body);
  }
}
