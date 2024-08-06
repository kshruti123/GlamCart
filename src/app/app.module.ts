import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { RelatedComponent } from './related/related.component';
import { ProductDiaplay2Component } from './product-diaplay2/product-diaplay2.component';

@NgModule({
  declarations: [AppComponent, ProductDisplayComponent, RelatedComponent, ProductDiaplay2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
