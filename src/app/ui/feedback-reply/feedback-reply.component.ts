import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addReplyAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IReply } from 'src/app/types';

@Component({
  selector: 'fb-reply',
  templateUrl: './feedback-reply.component.html',
  styleUrls: ['../feedback-comment/feedback-comment.component.scss'],
})
export class FeedbackReplyComponent {
  @Input() reply!: IReply;
  @Input() commentId!: string;
  @Input() replyTo!: string;
  shouldDisplayReplyForm = false;
  toggleShouldDisplayReplyForm() {
    this.shouldDisplayReplyForm = !this.shouldDisplayReplyForm;
  }
}
