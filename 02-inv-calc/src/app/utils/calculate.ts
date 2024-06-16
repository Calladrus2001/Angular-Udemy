import { yearData } from "../models/yearData";

export function calculate(init_investment: number, annual_investment: number, exp_return: number, duration: number) { 
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

    return annualData;
  }