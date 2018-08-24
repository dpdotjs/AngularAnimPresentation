import { Component } from '@angular/core';

@Component({
  selector: 'ap-code-pane',
  template: `
    <div class="codePane">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .codePane {
        border: 1px solid green;
        height: 100vh;
        width: 40vw;
        background-color: #002b36;
        color: grey;
        padding: 24px;
      }

      :host /deep/ pre code {
        font-family: 'Source Code Pro', monospace;
        margin: 0;
      }

      :host /deep/ pre code.highlight {
        color: orange;
      }
    `,
  ],
})
export class CodePaneComponent {}
