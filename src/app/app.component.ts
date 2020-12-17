import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IState } from './interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  states: IState[] = [];
  filteredStates: IState[] = [];
  searchForm: FormGroup;
  currentState: IState;
  loading: boolean = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
    ){
      this.searchForm = this.formBuilder.group({
        text: ''
      })

      this.searchForm.valueChanges.subscribe(value=>{
        const testRegEx = new RegExp(value.text, "i")
        this.filteredStates = this.states.filter(s=>!value.text || testRegEx.test(s.state))
      })
    }
  ngOnInit(){
    this.dataService.getStates().subscribe((data: any)=>{
      this.states = data.data;
      this.filteredStates = data.data;
    })
  }

  onStateClicked(state: IState): void{
    this.loading = true;
    this.currentState = {
      ...state,
      countiesList: []
    }
    this.dataService.getDetails(state.detail).subscribe((data: any)=>{
      this.currentState.countiesList = data.data || [];
      this.currentState.sumCountyPopulation = data.data.reduce((sum, c)=>sum+c.population,0)
      this.loading = false;
    })
  }

  
}
