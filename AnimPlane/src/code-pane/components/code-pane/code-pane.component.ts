import { Component } from '@angular/core';

@Component({
  selector: 'ap-code-pane',
  template: `
    <div class="codePane">
      <ng-content class="codeContent"></ng-content>
    </div>
  `,
  styles: [
    `
      .codePane {
        border: 1px solid green;
        height: 100vh;
        width: 50vw;
        background-color: #002b36;
        color: grey;
        padding: 24px;
      }

      :host /deep/ pre {
        height: 100vh;
        overflow: scroll;
      }

      :host /deep/ pre code {
        font-family: 'Source Code Pro', monospace;
        margin: 0;
        max-height: 100vh;
        overflow: scroll;
      }

      :host /deep/ pre code.highlight {
        color: orange;
      }

      :host /deep/ pre code.highlightPrev {
        color: lightblue;
      }
    `,
  ],
})
export class CodePaneComponent {}
