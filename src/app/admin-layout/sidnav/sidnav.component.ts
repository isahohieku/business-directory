import { Component, OnInit } from '@angular/core';

export class DashboardRoutes {
  link: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {

  routes: DashboardRoutes[] = [
    { link: '/app/dashboard', icon: 'fas fa-th', title: 'Dashboard'},
    { link: '/app/businesses', icon: 'fas fa-stream', title: 'Businesses'},
    { link: '/app/categories', icon: 'fas fa-list-ul', title: 'Categories'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
