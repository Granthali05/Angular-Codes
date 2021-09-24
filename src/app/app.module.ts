import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { PracticecomponentComponent } from './practicecomponent/practicecomponent.component';
import {BasicHighlightDirective } from './practicecomponent/Basic_highlight./basic-highlight.directive';
import { BetterHighlightDirective} from './practicecomponent/Better-Highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { practiceComp } from './Practice Component/practiceComp.component';
import {Practicecomp1} from './Practice Component/PracticeCompoent1/practicecomp1.component';
import{PracticeComp2} from './Practice Component/PracticeComponent2/practiceComp2.component';
import { User } from './Practice Component/User.module';
@NgModule({
  declarations: [
  
    Practicecomp1,
    PracticeComp2,
    practiceComp,
    // BetterHighlightDirective,
    // BasicHighlightDirective,
    AppComponent,
    Component1,
    Component2,
    Component3Component,
    // PracticecomponentComponent,
    UnlessDirective
  ],
  imports: [
    
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
