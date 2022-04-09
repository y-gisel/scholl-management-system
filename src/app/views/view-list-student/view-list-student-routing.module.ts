import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListStudentComponent } from './view-list-student.component';

const routes: Routes = [
  {
    path: '',
    component: ViewListStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewListStudentRoutingModule {}
