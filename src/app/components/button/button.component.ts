import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, fromEvent, interval, throttle, throttleTime } from 'rxjs';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() mathSign: string="";
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
  constructor(){}
}
