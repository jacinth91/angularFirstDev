import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer=false;
  serverCreationStatus="No Server was Created";
  serverName='Test server';
  serverCreated=false;
  servers=['testServer','bidderServer'];

  constructor() {
    setTimeout(()=>{
            this.allowedNewServer=true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was craeted suceesfully name is :'+this.serverName;
    
  }

  onUpdateServerName(event:any){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;//casting


  }

}
