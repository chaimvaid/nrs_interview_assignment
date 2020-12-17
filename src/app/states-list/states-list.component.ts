import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IState } from '../interfaces';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})
export class StatesListComponent implements OnInit {

  @Input() states: IState[] = [];
  @Output() stateClicked: EventEmitter<IState> = new EventEmitter;

  clickTimeout: any = null;
  clickCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStateClicked (e: MouseEvent, state: IState): void{
    if(e.detail > 1) return ;
    this.clickTimeout = setTimeout(()=>{     
        this.stateClicked.emit(state)     
    },250)
  }

  onStateDblClicked (state: IState): void{
    clearTimeout(this.clickTimeout)
    state.checked = !state.checked
  }

  

}
