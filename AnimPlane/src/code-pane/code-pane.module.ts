import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePaneComponent } from './components/code-pane';
import { CodeSlide100Component } from './components/slide-100';

export const COMPONENTS = [CodePaneComponent, CodeSlide100Component];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [COMPONENTS],
})
export class CodePaneModule {}
