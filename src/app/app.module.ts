import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';

import { TrendingComponentComponent } from './trending-component/trending-component.component';
import { NewArivalComponentComponent } from './new-arival-component/new-arival-component.component';
import { FlashSaleComponentComponent } from './flash-sale-component/flash-sale-component.component';
import { ProdDisplayComponent } from './prod-display/prod-display.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    
    TrendingComponentComponent,
    NewArivalComponentComponent,
    FlashSaleComponentComponent,
    ProdDisplayComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
