import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ApiRestService } from "src/app/core/services/rest/api-rest.service";
import { IntAddStudent } from "../schemas/view-add-student.interface";

@Injectable({
  providedIn: "root",
})
export class ViewAddStudentService {
  constructor(private apiRestService: ApiRestService) {}

  addStudent(url: string, body: IntAddStudent): Observable<IntAddStudent> {
    return this.apiRestService.postFormData(url, body).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err) => {
        throw new Error(err);
      })
    );
  }
}
