import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsEnum } from './core/enums/views-enum';

const routes: Routes = [
  {
    path: ViewsEnum.MODIFY_STUDENT,
    loadChildren: () =>
      import('./views/view-modify-student/view-modify-student.module').then(
        (m) => m.ViewModifyStudentModule
      ),
  },
  {
    path: ViewsEnum.ADD_STUDENT,
    loadChildren: () =>
      import('./views/view-add-student/view-add-student.module').then(
        (m) => m.ViewAddStudentModule
      ),
  },
  {
    path: ViewsEnum.LIST_STUDENT,
    loadChildren: () =>
      import('./views/view-list-student/view-list-student.module').then(
        (m) => m.ViewListStudentModule
      ),
  },
  { path: '', redirectTo: ViewsEnum.LIST_STUDENT, pathMatch: 'full' },
  { path: '**', redirectTo: ViewsEnum.LIST_STUDENT },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
