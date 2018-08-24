import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Subscription, interval } from 'rxjs';

// Plane take-off, easing.

@Component({
  selector: 'ap-anim-slide-500',
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
      state(
        'true',
        style({ transform: 'translateX(30vw) translateY(-100vh) rotate(45deg)' }),
      ),
      transition(
        '* <=> *',
        animate(
          '2500ms 600ms ease-in',
          keyframes([
            style({ transform: 'translateY(-40vh)', offset: 0.4 }),
            style({ transform: 'translateY(-60vh) rotate(45deg)', offset: 0.7 }),
            style({
              transform: 'translateX(30vw) translateY(-100vh) rotate(45deg)',
              offset: 1,
            }),
          ]),
        ),
      ),
    ]),
  ],
})
export class AnimSlide500Component implements AfterViewInit, OnDestroy {
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
