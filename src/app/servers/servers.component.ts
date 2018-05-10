import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //selects element by attribute, not by element itself
  // selector : '.app-servers', //select elemeny be class
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
