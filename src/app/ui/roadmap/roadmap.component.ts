import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roadmapStatuses } from 'src/app/constants/constans';
import { IAppStore } from 'src/app/types';

@Component({
  selector: 'roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent  implements OnInit{
  categories = roadmapStatuses;
  constructor(private _store: Store<IAppStore>){}

  ngOnInit(){
      
  }
  



}
