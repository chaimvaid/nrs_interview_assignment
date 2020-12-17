import { Component, OnInit, Input } from '@angular/core';
import { IState } from '../interfaces';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {

  @Input() state: IState;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  isPopulationSumEqualToPopulation(): boolean{
    return this.state.sumCountyPopulation == this.state.population;
  }
}
