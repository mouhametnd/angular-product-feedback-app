import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigHeaderComponent } from './ui/big-header/big-header.component';
import { CustomSelectComponent } from './ui/custom-select/custom-select.component';
import { FeedbackCategoriesComponent } from './ui/feedback-catergories/feedback-categories.component';
import { FeedbackCommentElementComponent } from './ui/feedback-comment-element/feedback-comment-element.component';
import { FeedBackLargeCardItemComponent } from './ui/feedback-large-card-item/feedback-large-card-item.component';

import { FeedbackLargeCardListComponent } from './ui/feedback-large-card-list/feedback-large-card-list.component';
import { FeedbackUpvoteElementComponent } from './ui/feedback-upvote-element/feedback-upvote-element.component';
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
    CustomSelectComponent,
    FeedBackLargeCardItemComponent,
    FeedbackLargeCardListComponent,
    FeedbackCommentElementComponent,
    FeedbackUpvoteElementComponent

    
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
