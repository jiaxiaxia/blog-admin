import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  theme = {
    header: 'skin-primary',
    aside: 'skin-primary',
    footer:'skin-primary',
    content:'skin-accent'
  };
  ngOnInit() {
  }

}
