import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapStatuses } from 'src/app/constants/constans';
import { IAppStore, IFeedBack } from 'src/app/types';

@Component({
  selector: 'roadmap-card-column',
  templateUrl: './roadmap-card-coulmn.component.html',
})
export class RoadmapCardColumn implements OnInit {
  constructor(private _state: Store<IAppStore>) {}

  @Input() status!: typeof roadmapStatuses[0];
  @Input() feedback!: IFeedBack;

  // todo: feedback type

  ngOnInit() {
    this._state.select('data').subscribe(({ productRequests }) => {
      this.feedback = productRequests[0];
    });
  }
}
