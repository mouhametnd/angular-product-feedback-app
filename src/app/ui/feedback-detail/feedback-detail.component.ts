import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addCommentAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'feedback-detail',
  templateUrl: './feedback-detail.component.html',
})
export class FeedBackDetailComponent implements OnInit, OnDestroy {
  constructor(
    private _store: Store<IAppStore>,
    private _route: ActivatedRoute
  ) {}
  feedback!: IFeedBack | null;
  commentValue!: string;
  segmentId!: string;
  subscription!: Subscription;
  formComment = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  });

  trackById(_: unknown, { id }: IFeedBack) {
    return id;
  }

  ngOnInit() {
    this.segmentId = this._route.snapshot.paramMap.get('id') as string;
    this.subscription = this._store
      .select('data')
      .subscribe(({ productRequests }) => {
        this.feedback = FeedbackHelper.getFbById(
          this.segmentId,
          productRequests
        );
      });
  }

  handlePostComment() {
    const { comment } = this.formComment.controls;
    if (!comment.value) return;
    this._store.dispatch(
      addCommentAct({
        fbId: this.segmentId,
        content: this.commentValue,
      })
    );
    comment.reset('');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
