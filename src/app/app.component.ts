import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'desafio-front-filmes';
  showMenu: boolean = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;
      window.scrollTo(0, 0);
    });
  }

}
