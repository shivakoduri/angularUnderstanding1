import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //selects element by attribute, not by element itself
  // selector : '.app-servers', //select elemeny be class
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewSever = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewSever = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
