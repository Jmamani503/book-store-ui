import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  text = input.required<string>();
  onClick = output<void>();

  handleClick(){
    this.onClick.emit();
  }
}
