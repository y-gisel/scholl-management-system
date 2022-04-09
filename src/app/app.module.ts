import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { SharedModule } from './core/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MainMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
