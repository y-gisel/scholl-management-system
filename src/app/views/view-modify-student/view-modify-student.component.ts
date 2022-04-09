import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ViewsEnum } from 'src/app/core/enums/views-enum';
import { environment } from 'src/environments/environment';
import { ViewModifyStudentService } from './services/view-modify-student.service';

@Component({
  selector: 'app-view-modify-student',
  templateUrl: './view-modify-student.component.html',
  styleUrls: ['./view-modify-student.component.scss'],
})
export class ViewModifyStudentComponent implements OnInit, OnDestroy {
  modifyStudentForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  private subscriptions: Subscription = new Subscription();
  queryParams: any;
  constructor(
    private viewModifyStudentService: ViewModifyStudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.subscriptions.add(
      this.activatedRoute.queryParams.pipe(first()).subscribe((params: any) => {
        if (params) {
          this.queryParams = params;
          this.setForm();
        }
      })
    );
  }

  private setForm() {
    this.modifyStudentForm?.controls.fullName.setValue(
      this.queryParams.Full_Name
    );
    this.modifyStudentForm?.controls.email.setValue(this.queryParams.email);
  }

  submit(): void {
    this.viewModifyStudentService
      .modifyStudent(
        `${environment.student}/${this.queryParams?.idStudent}`,
        this.modifyStudentForm.value
      )
      .subscribe(
        () => {
          window.alert('Successfully modified student');
          this.router.navigate([ViewsEnum.LIST_STUDENT]);
        },
        () => {
          window.alert('An error occurred while trying modify the student');
        }
      );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
