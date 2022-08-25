import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { BehaviorSubject, concatMap, map, of, tap } from 'rxjs';
import { sortDataAct } from 'src/app/store/slices/data-slice/data-slice-actions';
import { IAppStore, IFeedBack } from 'src/app/types';
import { FeedbackHelper } from 'src/app/utils/feedback-helper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _store: Store<IAppStore>, private _actions: Actions) {}
  feedbacks!: IFeedBack[];

  haveFeedbacks() {
    return this.feedbacks.length;
  }

  ngOnInit() {
    this._store.select('data').subscribe((stramedData) => {
      const { productRequests, filterCategory, sorter } = stramedData;


      // this._store.subscribe(stream => console.log('home store subscribed'))
      // this._actions.subscribe(stream => console.log('home action subscribed'))

      let filteredFbs = FeedbackHelper.filterFbByStatus(
        'SUGGESTION',
        productRequests
      );

      filteredFbs = FeedbackHelper.filterFbByCategory(
        filterCategory.value,
        filteredFbs
      );

      this.feedbacks = FeedbackHelper.sortFbsBy(sorter.value, filteredFbs);
    });
  }
}
