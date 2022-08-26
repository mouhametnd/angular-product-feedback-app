import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './ui/create-feedback/create-feedback.component';
import { EditFeedbackComponent } from './ui/edit-feedback/edit-feedback.component';
import { FeedBackDetailComponent } from './ui/feedback-detail/feedback-detail.component';
import { HomeComponent } from './ui/home/home.component';
import { RoadmapComponent } from './ui/roadmap/roadmap.component';

const routes: Routes = [
  {
    path: 'feedback-detail/:id',
    component: FeedBackDetailComponent,
  },
  {
    path: 'roadmap',
    component: RoadmapComponent,
  },
  {
    path: 'feedback-edit/:id',
    component: EditFeedbackComponent
  },
  {
    path: 'feedback-create',
    component: CreateFeedbackComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
