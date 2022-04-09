import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiRestService } from 'src/app/core/services/rest/api-rest.service';
import { IntListStudent } from '../schemas/view-list-student.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewListStudentService {
  constructor(private apiRestService: ApiRestService) {}

  getAllStudents(url: string): Observable<IntListStudent[]> {
    return this.apiRestService.get(url).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err) => {
        throw new Error(err);
      })
    );
  }

  deleteStudent(url: string) {
    return this.apiRestService.delete(url);
  }
}
