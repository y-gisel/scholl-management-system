import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewModifyStudentComponent } from './view-modify-student.component';

const routes: Routes = [
  {
    path: '',
    component: ViewModifyStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewModifyStudentRoutingModule {}
