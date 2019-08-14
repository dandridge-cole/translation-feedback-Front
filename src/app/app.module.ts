import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrigSelectorComponent } from './orig-selector/orig-selector.component';
import {HttpClientModule} from "@angular/common/http";
import { SelectorService } from './services/selectorService';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    NavbarComponent,
    OrigSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
