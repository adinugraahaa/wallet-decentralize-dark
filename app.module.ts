import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StellartabComponent } from './stellartab/stellartab.component';
import { FavtabComponent } from './favtab/favtab.component';
import { ArdortabComponent } from './ardortab/ardortab.component';
import { EthereumtabComponent } from './ethereumtab/ethereumtab.component';
import { UsdttabComponent } from './usdttab/usdttab.component';
import { BitcointabComponent } from './bitcointab/bitcointab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StellartabComponent,
    FavtabComponent,
    ArdortabComponent,
    EthereumtabComponent,
    UsdttabComponent,
    BitcointabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
