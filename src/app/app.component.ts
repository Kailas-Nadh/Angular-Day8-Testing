import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./components/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, LoginComponent]
})
export class AppComponent {
  title = 'test-lesson';
}
