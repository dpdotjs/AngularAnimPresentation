import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePaneComponent } from './components/code-pane';
import { CodeSlide100Component } from './components/slide-100';
import { CodeSlide200Component } from './components/slide-200';
import { CodeSlide300Component } from './components/slide-300';
import { CodeSlide400Component } from './components/slide-400';
import { CodeSlide500Component } from './components/slide-500';
import { CodeSlide0Component } from './components/slide-0';

export const COMPONENTS = [
  CodePaneComponent,
  CodeSlide0Component,
  CodeSlide100Component,
  CodeSlide200Component,
  CodeSlide300Component,
  CodeSlide400Component,
  CodeSlide500Component,
];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [COMPONENTS],
})
export class CodePaneModule {}
