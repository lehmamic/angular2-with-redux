import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, Store, StoreEnhancer } from 'redux';
import { NgRedux } from 'ng2-redux';

import { AppState  } from './shared';
import { AppComponent } from './app.component';
import { CounterComponent, counterReducer } from './counter';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
let store: Store<AppState> = createStore<AppState>(counterReducer, devtools);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgRedux],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private ngRedux: NgRedux<AppState>) {
        this.ngRedux.provideStore(store);
    }
 }
