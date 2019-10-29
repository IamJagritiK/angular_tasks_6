import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.childEvent.emit(value);
  }

}
