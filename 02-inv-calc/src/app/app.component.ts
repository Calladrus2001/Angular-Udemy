import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GridInputComponent } from './components/grid-input/grid-input.component';
import { yearData } from './models/yearData';
import { ResultComponent } from "./components/result/result.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, GridInputComponent, ResultComponent]
})
export class AppComponent {
  init_investment: number = 0;
  annual_investment: number = 0;
  exp_return: number = 0;
  duration: number = 0;
  annualData: yearData[] = [];
  
  calculate(init_investment:number, annual_investment:number, exp_return: number, duration:number) { 
    const annualData: yearData[] = [];
    let investmentValue = init_investment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (exp_return / 100);
      investmentValue += interestEarnedInYear + annual_investment;
      const totalInterest =
        investmentValue - annual_investment * year - init_investment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annual_investment,
        totalInterest: totalInterest,
        totalAmountInvested: init_investment + annual_investment * year,
      });
    }

    this.annualData = annualData;
  }
}
