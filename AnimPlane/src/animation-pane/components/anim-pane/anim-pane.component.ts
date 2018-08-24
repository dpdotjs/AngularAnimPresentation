import { Component } from '@angular/core';

@Component({
  selector: 'ap-anim-pane',
  template: `
    <div class="worldOverlay">
      <div class="worldSky"></div>
      <div class="worldGround"></div>
    </div>
    <div class="runwayOverlay">
      <div class="runway"></div>
    </div>
    <div class="animationOverlay">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .worldOverlay {
        width: 60vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .worldSky {
        background: linear-gradient(to bottom, #87e0fd 0%, #53cbf1 40%, #05abe0 100%);
        height: 600px;
        width: 100%;
      }

      .worldGround {
        background: linear-gradient(to bottom, #425e3d 0%, #2f422b 100%);
        height: 400px;
        width: 100%;
      }

      .runwayOverlay {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 60vw;
        height: 100vh;
        top: 0;
      }

      .runway {
        border-bottom: 39vh solid #7f8187;
        border-left: 200px solid transparent;
        border-right: 200px solid transparent;
        height: 61vh;
        width: 200px;
      }

      .animationOverlay {
        position: absolute;
        display: flex;
        width: 60vw;
        height: 100vh;
        top: 0;
      }
    `,
  ],
})
export class AnimPaneComponent {}
