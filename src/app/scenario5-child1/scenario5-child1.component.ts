import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-child1',
  templateUrl: './scenario5-child1.component.html',
  styleUrls: ['./scenario5-child1.component.css']
})
export class Scenario5Child1Component implements OnInit {
  @Output() public middleEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getMessage(value){
    this.middleEvent.emit(value);
  }
}
