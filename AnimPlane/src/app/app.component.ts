import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="pageWrapper">
      <ap-anim-pane>
        <ap-anim-slide-200></ap-anim-slide-200>
      </ap-anim-pane>

      <ap-code-pane>
        <ap-code-slide-100></ap-code-slide-100>
      </ap-code-pane>
    </div>
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
export class AppComponent {}
