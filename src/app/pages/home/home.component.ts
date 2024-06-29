import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonComponent]
})
export class HomeComponent {
  counter: number = 0;

  addCounter() {
    ++this.counter;
  }

  subCounter() {
    --this.counter;
  }
}
