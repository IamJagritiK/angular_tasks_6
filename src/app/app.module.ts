import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasecComponent } from './basec/basec.component';

import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Scenario3ChildComponent } from './scenario3-child/scenario3-child.component';
import { Scenario4ChildComponent } from './scenario4-child/scenario4-child.component';
import { Scenario5Child1Component } from './scenario5-child1/scenario5-child1.component';
import { Scenario5Child2Component } from './scenario5-child2/scenario5-child2.component';
import { Scenario6Child2Component } from './scenario6-child2/scenario6-child2.component';
import { Scenario6Child1Component } from './scenario6-child1/scenario6-child1.component';

@NgModule({
  declarations: [
    AppComponent,
    BasecComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario4Component,
    Scenario5Component,
    Scenario6Component,
    Scenario3ChildComponent,
    Scenario4ChildComponent,
    Scenario5Child1Component,
    Scenario5Child2Component,
    Scenario6Child2Component,
    Scenario6Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
