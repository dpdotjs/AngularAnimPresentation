import { Component } from '@angular/core';

// Take-off, keyframed.

@Component({
  selector: 'ap-code-slide-500',
  template: `
    <pre>
      <code ngNonBindable [innerHTML]="codeA"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeB"></code>
      <code ngNonBindable [innerHTML]="codeC"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeCa"></code>
      <code ngNonBindable [innerHTML]="codeCb"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeD"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeDa"></code>
      <code ngNonBindable [innerHTML]="codeE"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeF"></code>
      <code ngNonBindable [innerHTML]="codeG"></code>
    </pre>
  `,
  styles: [``],
})
export class CodeSlide500Component {
  codeA = `
    @Component({
      selector: 'my-page',
      template: &#96;
        &lt;ap-runway-light
  `;

  codeB = `
          [@runwayState]="goDownRunway"
          [class.hidden]="!goDownRunway"
  `;

  codeC = `
        &gt;&lt;/ap-runway-light>
        &lt;ap-plane
`;
  codeCa = `
          [@takeOffState]="takeOff"
  `;

  codeCb = `
        &gt;&lt;/ap-plane>
      &#96;,
      styles: [&#96;
        .hidden {
          display: none;
        }
      &#96;],
  `;
  codeD = `
      animations: [
        trigger('runwayState', [
          state('true',
            style({ transform: 'translateY(39vh)' })
          ),
          state('false',
            style({ transform: '*' })
          ),
          transition('false => true', animate(350)),
          transition('true => false', animate(0)),
        ]),
`;

  codeDa = `
        trigger('takeOffState', [
          state(
            'true',
            style({ 
              transform: 'translateX(30vw) translateY(-100vh) rotate(45deg)' 
            }),
          ),
          transition(
            '* <=> *',
            animate(
              '2500ms ease-in',
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
        ])
      ]
  `;

  codeE = `
    })
    export class MyPage implements AfterViewInit, OnDestroy {
  `;

  codeF = `
      goDownRunway = true
      takeOff = true
      interval: Subscription;

      ngAfterViewInit() {
        this.interval = interval(400).subscribe(() => 
          this.loopAnimation()
        );
      }

      ngOnDestroy() {
        this.interval.unsubscribe();
      }

      loopAnimation() {
        this.goDownRunway = !this.goDownRunway;
      }
  `;

  codeG = `
    }
  `;
}
