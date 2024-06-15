import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GridInputComponent } from './components/grid-input/grid-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  init_investment: number = 0;
  annual_investment: number = 0;
  exp_return: number = 0;
  duration: number = 0;
  
  calculate(init_investment:number, annual_investment:number, exp_return: number, duration:number) { 
    console.log(`${init_investment}, ${annual_investment}, ${exp_return}, ${duration}`)
  }
}
