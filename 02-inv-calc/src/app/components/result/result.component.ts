import { Component, Input } from '@angular/core';
import { yearData } from '../../models/yearData';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  @Input() annualData!: yearData[]
}
