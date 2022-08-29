import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { appStore } from './store/store';
import { EffectsModule } from '@ngrx/effects';
import { SaveDataEffect } from './store/effects/save-data.effects';
import { arrayComponents } from './constants/components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: arrayComponents,
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    appStore,
    EffectsModule.forRoot([SaveDataEffect]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
