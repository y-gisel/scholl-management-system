import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewsEnum } from 'src/app/core/enums/views-enum';
import { environment } from 'src/environments/environment';
import { IntListStudent } from './schemas/view-list-student.interface';
import { ViewListStudentService } from './services/view-list-student.service';

@Component({
  selector: 'app-view-list-student',
  templateUrl: './view-list-student.component.html',
  styleUrls: ['./view-list-student.component.scss'],
})
export class ViewListStudentComponent implements OnInit {
  listStudents: IntListStudent[] = [
    {
      idStudent: 1,
      Course: '9',
      email: 'rafaelordonezmolina@gmail.com',
      Full_Name: 'Rafael Ordonez',
    },
    {
      idStudent: 3,
      Course: '1',
      email: 'rafa@gmail.com',
      Full_Name: 'Rafa',
    },
  ];

  average = 0;
  constructor(
    private viewListStudentService: ViewListStudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.viewListStudentService.getAllStudents(environment.student).subscribe(
      (data: IntListStudent[]) => {
        if (data) {
          this.listStudents = data;
          this.getAverage();
        }
      },
      () => {
        // this.listStudents = [];
        window.alert('An error occurred while trying get the students');
      }
    );
  }

  private getAverage() {
    this.average =
      this.listStudents.reduce(
        (result, currentValue) =>
          (result = result + Number(currentValue.Course)),
        0
      ) / this.listStudents.length;
  }

  deleteStudent(student: IntListStudent): void {
    this.viewListStudentService
      .deleteStudent(`${environment.student}/${student.idStudent}`)
      .subscribe(
        () => {
          window.alert('Student deleted successfully');
        },
        () => {
          window.alert('An error occurred while trying delete the student');
        }
      );
  }

  modifyStudent(student: IntListStudent): void {
    this.router.navigate([ViewsEnum.MODIFY_STUDENT], { queryParams: student });
  }
}
