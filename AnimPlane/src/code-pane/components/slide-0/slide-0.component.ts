import { Component } from '@angular/core';

// The runway light, animating once.

@Component({
  selector: 'ap-code-slide-0',
  template: `
    <pre>
      <code ngNonBindable [innerHTML]="codeA"></code>
    </pre>
  `,
  styles: [``],
})
export class CodeSlide0Component {
  codeA = `
    @Component({
      selector: 'my-page',
      template: &#96;
        &lt;ap-runway-light&gt;&lt;/ap-runway-light>
        &lt;ap-plane&gt;&lt;/ap-plane&gt;
      &#96;,
      styles: [&#96;
        ...
      &#96;],
    })
    export class MyPage {
      //...
    }
  `;
}
