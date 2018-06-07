import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.events.filter(event => event instanceof NavigationEnd)
    .subscribe(e => console.log(e))
  }

  ngOnInit() {
  }

}
