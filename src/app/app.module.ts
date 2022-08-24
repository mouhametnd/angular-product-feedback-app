import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IconArrowUpComponent } from 'src/assets/shared/icon-arrow-up/icon-arrow-up.component';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseFormComponent } from './ui/base-from/base-form.component';
import { BaseSuggestionBarComponent } from './ui/base-suggestion-bar/base-suggestion-bar.component';
import { BigHeaderComponent } from './ui/big-header/big-header.component';
import { CreateFeedbackComponent } from './ui/create-feedback/create-feedback.component';
import { CustomSelectComponent } from './ui/custom-select/custom-select.component';
import { DumbFormComponent } from './ui/dumb-component/dumb-form.component';
import { EditFeedbackComponent } from './ui/edit-feedback/edit-feedback.component';
import { FeedbackCategoriesComponent } from './ui/feedback-catergories/feedback-categories.component';
import { FeedbackCommentElementComponent } from './ui/feedback-comment-element/feedback-comment-element.component';
import { FeedBackLargeCardItemComponent } from './ui/feedback-large-card-item/feedback-large-card-item.component';

import { FeedbackLargeCardListComponent } from './ui/feedback-large-card-list/feedback-large-card-list.component';
import { FeedbackUpvoteElementComponent } from './ui/feedback-upvote-element/feedback-upvote-element.component';
import { GoBackElementComponent } from './ui/go-back-element/go-back-element.component';
import { HomeComponent } from './ui/home/home.component';
import { MobileHeaderComponent } from './ui/mobile-header/mobile-header.component';
import { PresentationCardComponent } from './ui/presentation-card/presentation-card.component';
import { RoadmapItemComponent } from './ui/roadmap-item/roadmap-item.component';
import { RoadmapCardComponent } from './ui/roadmap-card/roadmap-card.component';
import { SuggestionBarComponent } from './ui/suggestion-bar/suggestion-bar.component';
import { RoadmapComponent } from './ui/roadmap/roadmap.component';
import { RoadmapColumn } from './ui/roadmap-column/roadmap-column.component';
import { RoadmapCardColumn } from './ui/roadmap-card-column/roadmap-card-column.component';
import { FeedBackDetailComponent } from './ui/feedback-detail/feedback-detail.component';
import { FeedbackCommentComponent } from './ui/feedback-comment/feedback-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileHeaderComponent,
    FeedbackCategoriesComponent,
    RoadmapCardComponent,
    RoadmapItemComponent,
    BigHeaderComponent,
    PresentationCardComponent,
    SuggestionBarComponent,
    CustomSelectComponent,
    FeedBackLargeCardItemComponent,
    FeedbackLargeCardListComponent,
    FeedbackCommentElementComponent,
    FeedbackUpvoteElementComponent,
    IconArrowUpComponent,
    HomeComponent,
    DumbFormComponent,
    GoBackElementComponent,
    CreateFeedbackComponent,
    EditFeedbackComponent,
    BaseFormComponent,
    BaseSuggestionBarComponent,
    RoadmapComponent,
    RoadmapColumn,
    RoadmapCardColumn,
    FeedBackDetailComponent ,
    FeedbackCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
