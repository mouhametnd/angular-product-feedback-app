import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addReplyAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore } from 'src/app/types';

@Component({
  selector: 'form-reply',
  templateUrl: './form-reply.component.html',

})
export class FormReplyComponent implements OnInit {
  constructor(
    private _store: Store<IAppStore>,
    private _activatedRoute: ActivatedRoute
  ) {}
  segmentId!: string;
  formReply = new FormGroup({
    reply: new FormControl('', [Validators.required]),
  });
  @Input() commentId!: string;
  @Input() replyTo!: string;
  @Input() shouldDisplayForm!: boolean;

  ngOnInit() {
    this.segmentId = this._activatedRoute.snapshot.paramMap.get('id') as string;
  }

  handleSubmit() {
    const { reply } = this.formReply.controls;
    if (!reply.value) return;

    this._store.dispatch(
      addReplyAct({
        commentId: this.commentId,
        fbId: this.segmentId,
        content: reply.value,
        replyTo: this.replyTo,
      })
    );
    reply.reset('');
  }
}
