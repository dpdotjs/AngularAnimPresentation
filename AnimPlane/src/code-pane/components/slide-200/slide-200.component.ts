import { Component } from '@angular/core';

// The runway light, looping.

@Component({
  selector: 'ap-code-slide-200',
  template: `
    <pre>
      <code ngNonBindable [innerHTML]="codeA"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeB"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeBa"></code>
      <code ngNonBindable [innerHTML]="codeC"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeCa"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeD"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeDa"></code>
      <code ngNonBindable [innerHTML]="codeE"></code>
      <code class="highlightPrev" ngNonBindable [innerHTML]="codeF"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeFa"></code>
      <code ngNonBindable [innerHTML]="codeG"></code>
    </pre>
  `,
  styles: [``],
})
export class CodeSlide200Component {
  codeA = `
    @Component({
      selector: 'my-page',
      template: &#96;
        &lt;ap-runway-light
  `;

  codeB = `
          [@runwayState]="goDownRunway"
  `;

  codeBa = `
          [class.hidden]="!goDownRunway"
  `;

  codeC = `
        &gt;&lt;/ap-runway-light>
        &lt;ap-plane&gt;&lt;/ap-plane&gt;
      &#96;,
  `;
  codeCa = `
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
`;

  codeDa = `
          state('false',
            style({ transform: '*' })
          ),
          transition('false => true', animate(350)),
          transition('true => false', animate(0)),
        ]),
      ]
  `;

  codeE = `
    })
    export class MyPage implements AfterViewInit, OnDestroy {
  `;

  codeF = `
      goDownRunway = true
  `;

  codeFa = `
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
