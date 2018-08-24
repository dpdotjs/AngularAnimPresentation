import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

// Plane take-off, easing with delay.

@Component({
  selector: 'ap-anim-slide-400',
  template: `
    <div class="slideWrapper">
      <ap-runway-light
        [@runwayState]="goDownRunway"
        [class.hidden]="!goDownRunway"
      ></ap-runway-light>
      <ap-plane
        [@takeOffState]="takeOff"
      ></ap-plane>
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

      .hidden {
        display: none;
      }
    `,
  ],
  animations: [
    trigger('runwayState', [
      state('true', style({ transform: 'translateY(39vh)' })),
      state('false', style({ transform: '*' })),
      transition('false => true', animate(350)),
      transition('true => false', animate(0)),
    ]),
    trigger('takeOffState', [
      state('true', style({ transform: 'translateY(-100vh)' })),
      transition('* <=> *', animate('1500ms ease-in')),
    ]),
  ],
})
export class AnimSlide400Component implements AfterViewInit, OnDestroy {
  goDownRunway = true;
  takeOff = true;
  interval: Subscription;

  ngAfterViewInit() {
    this.interval = interval(400).subscribe(() => this.loopAnimation());
  }

  ngOnDestroy() {
    this.interval.unsubscribe();
  }

  loopAnimation() {
    this.goDownRunway = !this.goDownRunway;
  }
}
