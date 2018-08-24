import { Component } from '@angular/core';

// Take-off, easing and delay.

@Component({
  selector: 'ap-code-slide-400',
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
export class CodeSlide400Component {
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
        trigger('takeOffState', [
          state('true', style({ transform: 'translateY(-100vh)' })),
`;
  codeDa = `
          transition('* <=> *', animate('1500ms 600ms ease-in')),
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
