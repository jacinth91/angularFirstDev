import { Component, OnInit,Input, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
 @Input() element:{type:string,name:string,content:string};

 @Input() name:string;

  constructor() {
    console.log('constructor called');

   }
   ngOnChanges(change:SimpleChanges){
    console.log(change); 
    console.log('on change called');

   }

  ngDoCheck(){
    console.log('ng DoCheck called');
  }
  ngAfterContentInit(){

    console.log('ng after init called');
  }
  ngAfterContentChecked(){
    console.log('aftre content checked called');
  }
  ngAfterViewInit(){
    console.log('after view called');
  }
  ngAfterViewChecked(){
    console.log('aftre view ckecked called');
  }

  ngOnDestroy(){
    console.log('ng on destroy called');
  }

  ngOnInit() {

    console.log('ng on init called');
  }

}
