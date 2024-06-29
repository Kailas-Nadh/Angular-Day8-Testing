import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', Validators.required),
  });

  constructor() {}
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

@Output() changePage = new EventEmitter<boolean>();

emitChange(){
  this.changePage.emit();
}
}
