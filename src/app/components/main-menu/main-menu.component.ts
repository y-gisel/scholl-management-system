import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewsEnum } from 'src/app/core/enums/views-enum';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  navBar = [
    {
      title: 'List Students',
      active: false,
      page: ViewsEnum.LIST_STUDENT,
    },
    {
      title: 'Add Students',
      active: false,
      page: ViewsEnum.ADD_STUDENT,
    },
  ];

  constructor(private router: Router) {}

  changeItemActive(pageActive: any) {
    this.navBar.forEach((item) => {
      item['active'] = item.page === pageActive.page ? true : false;
    });
    this.router.navigate([pageActive.page]);
  }
}
