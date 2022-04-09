import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IntAddStudent } from './schemas/view-add-student.interface';
import { ViewAddStudentService } from './services/view-add-student.service';

@Component({
  selector: 'app-view-add-student',
  templateUrl: './view-add-student.component.html',
  styleUrls: ['./view-add-student.component.scss'],
})
export class ViewAddStudentComponent implements OnInit {
  studentForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    course: new FormControl(null, Validators.required),
  });

  constructor(private viewAddStudentService: ViewAddStudentService) {}

  ngOnInit(): void {}

  submit() {
    this.viewAddStudentService
      .addStudent(environment.student, this.studentForm.value)
      .subscribe(
        (data: IntAddStudent) => {
          if (data && data === this.studentForm.value) {
            window.alert('Student created successfully');
          } else {
            window.alert(
              'An error occurred while trying to create the student'
            );
          }
        },
        () => {
          window.alert('An error occurred while trying to create the student');
        }
      );
  }
}
