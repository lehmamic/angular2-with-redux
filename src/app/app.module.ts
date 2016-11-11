import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provide } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './shared';

import { AppComponent } from './app.component';
import { CounterComponent, counterReducer } from './counter';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(counterReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
