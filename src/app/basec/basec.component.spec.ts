import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecComponent } from './basec.component';

describe('BasecComponent', () => {
  let component: BasecComponent;
  let fixture: ComponentFixture<BasecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
