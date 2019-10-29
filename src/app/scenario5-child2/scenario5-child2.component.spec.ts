import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Child2Component } from './scenario5-child2.component';

describe('Scenario5Child2Component', () => {
  let component: Scenario5Child2Component;
  let fixture: ComponentFixture<Scenario5Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
