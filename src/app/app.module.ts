import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PrimeNgModule} from './prime-ng/prime-ng.module';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule,
        PrimeNgModule,
        PagesModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
