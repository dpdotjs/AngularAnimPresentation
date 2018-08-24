import { Component } from '@angular/core';

@Component({
  selector: 'ap-anim-slide-0',
  template: `
    <div class="slideWrapper">
      <ap-runway-light></ap-runway-light>
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
})
export class AnimSlide0Component {}
