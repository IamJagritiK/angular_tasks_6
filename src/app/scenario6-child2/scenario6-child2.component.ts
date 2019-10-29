import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6-child2',
  templateUrl: './scenario6-child2.component.html',
  styleUrls: ['./scenario6-child2.component.css']
})
export class Scenario6Child2Component implements OnInit {
  @Output() public myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  printMe(value){
    this.myEvent.emit(value);
  }


}
