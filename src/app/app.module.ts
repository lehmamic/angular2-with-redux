import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, DevToolsExtension } from 'ng2-redux';

import { AppState,  } from './shared';
import { AppComponent } from './app.component';
import { CounterComponent, counterReducer, initialState } from './counter';

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
  providers: [NgRedux, DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private ngRedux: NgRedux<AppState>, private devTools: DevToolsExtension) {
        this.ngRedux.configureStore(counterReducer, initialState, [], [devTools.enhancer()]);
    }
 }
