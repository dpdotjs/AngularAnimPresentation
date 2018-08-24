import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimPaneComponent } from './components/anim-pane';
import { RunwayLightComponent } from './components/runway-light';
import { AnimSlide100Component } from './components/slide-100';
import { AnimSlide200Component } from './components/slide-200';

export const COMPONENTS = [
  AnimPaneComponent,
  RunwayLightComponent,
  AnimSlide100Component,
  AnimSlide200Component,
];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [COMPONENTS],
})
export class AnimationPaneModule {}
