import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'ap-anim-slide-200',
  template: `
    <div class="slideWrapper">
      <ap-runway-light
        [@runwayState]="goDownRunway"
        (@runwayState.done)="loopAnimation()"
      ></ap-runway-light>
    </div>
  `,
  styles: [
    `
      .slideWrapper {
        display: flex;
        height: 100vh;
        width: 60vw;
        justify-content: center;
        margin-top: 62vh;
      }
    `,
  ],
  animations: [
    trigger('runwayState', [
      state('true', style({ transform: 'translateY(39vh)' })),
      state('false', style({ transform: 'translateY(-39vh)' })),
      transition('* <=> *', animate('450ms')),
    ]),
  ],
})
export class AnimSlide200Component implements AfterViewInit {
  goDownRunway = false;

  ngAfterViewInit() {
    this.goDownRunway = true;
  }

  loopAnimation() {
    this.goDownRunway = !this.goDownRunway;
    console.log('this.goDownRunway =', this.goDownRunway);
  }
}