import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Child1Component } from './scenario5-child1.component';

describe('Scenario5Child1Component', () => {
  let component: Scenario5Child1Component;
  let fixture: ComponentFixture<Scenario5Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
