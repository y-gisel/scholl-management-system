import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewListStudentComponent } from './view-list-student.component';
import { ViewListStudentRoutingModule } from './view-list-student-routing.module';
import { ViewListStudentService } from './services/view-list-student.service';

@NgModule({
  declarations: [ViewListStudentComponent],
  imports: [CommonModule, ViewListStudentRoutingModule],
  providers: [ViewListStudentService],
})
export class ViewListStudentModule {}
