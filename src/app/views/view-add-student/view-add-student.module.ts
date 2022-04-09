import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewAddStudentComponent } from './view-add-student.component';
import { ViewAddStudentRoutingModule } from './view-add-student-routing.module';
import { ViewAddStudentService } from './services/view-add-student.service';

@NgModule({
  declarations: [ViewAddStudentComponent],
  imports: [
    CommonModule,
    ViewAddStudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ViewAddStudentService],
})
export class ViewAddStudentModule {}
