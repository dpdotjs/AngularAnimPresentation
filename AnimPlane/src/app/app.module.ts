import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationPaneModule } from '../animation-pane';
import { CodePaneModule } from 'code-pane';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AnimationPaneModule,
    CodePaneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
