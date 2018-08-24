import { Component } from '@angular/core';

@Component({
  selector: 'ap-plane',
  template: `
    <div class="planeWrapper">
      <span class="planeSpan2"></span>
      <span class="planeSpan1"></span>
      
    </div>
  `,
  styles: [
    `
      .planeWrapper {
        position: relative;
      }

      .planeSpan1 {
        position: absolute;
        left: -110px;
        width: 0;
        height: 0;
        border-left: 110px solid transparent;
        border-right: 110px solid transparent;
        border-bottom: 30px solid #fff9c4;
      }

      .planeSpan2 {
        position: absolute;
        left: -50px;
        top: -20px;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 55px solid #ffee58;
      }
    `,
  ],
})
export class PlaneComponent {}
