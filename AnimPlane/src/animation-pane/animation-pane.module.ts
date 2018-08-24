import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimPaneComponent } from './components/anim-pane';
import { RunwayLightComponent } from './components/runway-light';
import { PlaneComponent } from './components/plane';
import { AnimSlide100Component } from './components/slide-100';
import { AnimSlide200Component } from './components/slide-200';
import { AnimSlide300Component } from './components/slide-300';
import { AnimSlide400Component } from './components/slide-400';
import { AnimSlide500Component } from './components/slide-500';
import { AnimSlide0Component } from './components/slide-0';

export const COMPONENTS = [
  AnimPaneComponent,
  RunwayLightComponent,
  PlaneComponent,
  AnimSlide0Component,
  AnimSlide100Component,
  AnimSlide200Component,
  AnimSlide300Component,
  AnimSlide400Component,
  AnimSlide500Component,
];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [COMPONENTS],
})
export class AnimationPaneModule {}
