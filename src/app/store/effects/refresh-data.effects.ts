import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { IAppStore } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class RefreshDataEffect {
  constructor(private _actions$: Actions, private _store$: Store<IAppStore>) {}

  refreshData$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType('[data] UPVOTE_TOGGLE'),
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
