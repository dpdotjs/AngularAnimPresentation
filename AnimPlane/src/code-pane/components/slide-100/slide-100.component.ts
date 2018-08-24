import { Component } from '@angular/core';

// The runway light, animating once.

@Component({
  selector: 'ap-code-slide-100',
  template: `
    <pre>
      <code ngNonBindable [innerHTML]="codeA"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeB"></code>
      <code ngNonBindable [innerHTML]="codeC"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeD"></code>
      <code ngNonBindable [innerHTML]="codeE"></code>
      <code class="highlight" ngNonBindable [innerHTML]="codeF"></code>
      <code ngNonBindable [innerHTML]="codeG"></code>
    </pre>
  `,
  styles: [``],
})
export class CodeSlide100Component {
  codeA = `
    @Component({
      selector: 'my-page',
      template: &#96;
        &lt;ap-runway-light
  `;

  codeB = `
          [@runwayState]="goDownRunway"
  `;

  codeC = `
        &gt;&lt;/ap-runway-light>
        &lt;ap-plane&gt;&lt;/ap-plane&gt;
      &#96;,
      styles: [&#96;
        ...
      &#96;],
  `;
  codeD = `
      animations: [
        trigger('runwayState', [
          state('true', 
            style({ transform: 'translateY(39vh)' })
          ),
          transition('* => *', animate(350)),
        ]),
      ]
  `;

  codeE = `
    })
    export class MyPage {
`;

  codeF = `
      goDownRunway = true
  `;

  codeG = `
    }
  `;
}
