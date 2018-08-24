import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'ap-anim-slide-100',
  template: `
    <div class="slideWrapper">
      <ap-runway-light
        [@runwayState]="goDownRunway"
      ></ap-runway-light>
      <ap-plane></ap-plane>
    </div>
  `,
  styles: [
    `
      .slideWrapper {
        display: flex;
        max-height: 100vh;
        width: 50vw;
        justify-content: center;
        margin-top: 62vh;
      }

      ap-plane {
        position: fixed;
        bottom: 100px;
      }
    `,
  ],
  animations: [
    trigger('runwayState', [
      state('true', style({ transform: 'translateY(39vh)' })),
      transition('* => *', animate('450ms')),
    ]),
  ],
})
export class AnimSlide100Component {
  goDownRunway = true;
}
