import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="pageWrapper">
      <ap-anim-pane>
        <ap-anim-slide-0 *ngIf="currentAnimSlide === 0"></ap-anim-slide-0>
        <ap-anim-slide-100 *ngIf="currentAnimSlide === 100"></ap-anim-slide-100>
        <ap-anim-slide-200 *ngIf="currentAnimSlide === 200"></ap-anim-slide-200>
        <ap-anim-slide-300 *ngIf="currentAnimSlide === 300"></ap-anim-slide-300>
        <ap-anim-slide-400 *ngIf="currentAnimSlide === 400"></ap-anim-slide-400>
        <ap-anim-slide-500 *ngIf="currentAnimSlide === 500"></ap-anim-slide-500>
      </ap-anim-pane>

      <ap-code-pane>
        <ap-code-slide-0 *ngIf="currentCodeSlide === 0"></ap-code-slide-0>
        <ap-code-slide-100 *ngIf="currentCodeSlide === 100"></ap-code-slide-100>
        <ap-code-slide-200 *ngIf="currentCodeSlide === 200"></ap-code-slide-200>
        <ap-code-slide-300 *ngIf="currentCodeSlide === 300"></ap-code-slide-300>
        <ap-code-slide-400 *ngIf="currentCodeSlide === 400"></ap-code-slide-400>
        <ap-code-slide-500 *ngIf="currentCodeSlide === 500"></ap-code-slide-500>
      </ap-code-pane>
    </div>
    <input #keyhook (keydown)="onKeydown($event)">
  `,
  styles: [
    `
      .pageWrapper {
        display: flex;
        border: 1px solid black;
      }
    `,
  ],
})
export class AppComponent {
  @ViewChild('keyhook')
  input: ElementRef;

  currentCodeSlide = 0;
  currentAnimSlide = 0;

  ngOnInit() {
    this.input.nativeElement.focus();
  }

  onKeydown($event) {
    if ($event.key === 'ArrowLeft') {
      this.slidePrev();
    } else if ($event.key === 'ArrowRight') {
      this.slideNext();
    }
  }

  slidePrev() {
    if (this.currentCodeSlide === 0) {
      return;
    }

    if (this.currentCodeSlide === this.currentAnimSlide) {
      this.currentAnimSlide -= 100;
    } else {
      this.currentCodeSlide -= 100;
    }
    console.log('code', this.currentCodeSlide, 'anim', this.currentAnimSlide);
  }

  slideNext() {
    if (this.currentAnimSlide === 500) {
      return;
    }

    if (this.currentCodeSlide === this.currentAnimSlide) {
      this.currentCodeSlide += 100;
    } else {
      this.currentAnimSlide += 100;
    }
    console.log('code', this.currentCodeSlide, 'anim', this.currentAnimSlide);
  }
}
