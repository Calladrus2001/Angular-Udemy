import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-input',
  standalone: true,
  templateUrl: './grid-input.component.html',
})
export class GridInputComponent {
  @Input() displayText!: string;
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(Number(inputElement.value));
  }
}
