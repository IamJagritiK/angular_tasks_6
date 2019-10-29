import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-child1',
  templateUrl: './scenario6-child1.component.html',
  styleUrls: ['./scenario6-child1.component.css']
})
export class Scenario6Child1Component implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
