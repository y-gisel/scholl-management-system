import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModifyStudentComponent } from './view-modify-student.component';
import { ViewModifyStudentRoutingModule } from './view-modify-student-routing.module';
import { ViewModifyStudentService } from './services/view-modify-student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewModifyStudentComponent],
  imports: [
    CommonModule,
    ViewModifyStudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ViewModifyStudentService],
})
export class ViewModifyStudentModule {}
