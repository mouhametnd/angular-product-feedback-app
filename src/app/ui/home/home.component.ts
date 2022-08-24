import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { IAppStore, IFeedBack } from 'src/app/types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _store: Store<IAppStore>) {}
  feedbacks!: IFeedBack[];

  ngOnInit() {
    this._store.select('data').subscribe((stream) => {
      this.feedbacks = stream.productRequests;
    });
  }
}
