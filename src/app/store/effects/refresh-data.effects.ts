import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, mergeMap } from 'rxjs';
import { IAppStore } from 'src/app/types';
import { refreshStore } from '../slices/data-slice/data-slice-actions';

@Injectable({
  providedIn: 'root',
})
export class RefreshDataEffect {
  constructor(private _actions$: Actions, private _store$: Store<IAppStore>) {}

  refreshStore$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType('[data] UPVOTE_TOGGLE', '[data] CREATE'),
        mergeMap(() =>
          this._store$.pipe(
            map(({ data }) => {
              const { currentUser, productRequests } = data;
              localStorage.setItem(
                'data',
                JSON.stringify({ currentUser, productRequests })
              );
            })
          )
        )
      ),
    { dispatch: false }
  );
}
