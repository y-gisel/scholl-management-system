import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAddStudentComponent } from './view-add-student.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAddStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAddStudentRoutingModule {}
