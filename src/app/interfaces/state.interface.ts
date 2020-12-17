import { ICountry } from ".";

export interface IState {
   state : string;
   population : number;
   counties : number;
   detail : string;
   countiesList? : ICountry[];
   sumCountyPopulation?: number;
   checked?: boolean;
}
