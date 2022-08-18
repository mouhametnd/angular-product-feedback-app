import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigHeaderComponent } from './ui/big-header/big-header.component';
import { CustomSelectComponent } from './ui/custom-select/custom-select.component';
import { FeedbackCategoriesComponent } from './ui/feedback-catergories/feedback-categories.component';
import { MobileHeaderComponent } from './ui/mobile-header/mobile-header.component';
import { PresentationCardComponent } from './ui/presentation-card/presentation-card.component';
import { RoadmapItemComponent } from './ui/roadmap-item/roadmap-item.component';
import { RoadmapComponent } from './ui/roadmap/roadmap.component';
import { SuggestionBarComponent } from './ui/suggestion-bar/suggestion-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileHeaderComponent,
    FeedbackCategoriesComponent,
    RoadmapComponent,
    RoadmapItemComponent,
    BigHeaderComponent,
    PresentationCardComponent,
    SuggestionBarComponent,
    CustomSelectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
