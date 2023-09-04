import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Thing1 } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';

@NgModule({
  declarations: [AppComponent, Thing1, Thing2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
