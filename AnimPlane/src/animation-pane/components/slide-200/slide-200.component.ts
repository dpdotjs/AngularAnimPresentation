import { Component, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

// A runway light, looping.

@Component({
  selector: 'ap-anim-slide-200',
  template: `
    <div class="slideWrapper">
      <ap-runway-light
        [@runwayState]="goDownRunway"
        [class.hidden]="!goDownRunway"
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
  ],
})
export class AnimSlide200Component implements AfterViewInit, OnDestroy {
  goDownRunway = true;
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
