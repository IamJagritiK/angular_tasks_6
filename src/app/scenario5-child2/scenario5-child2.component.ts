import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-child2',
  templateUrl: './scenario5-child2.component.html',
  styleUrls: ['./scenario5-child2.component.css']
})
export class Scenario5Child2Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  displayMe(value){
    this.childEvent.emit(value);
  }

}
