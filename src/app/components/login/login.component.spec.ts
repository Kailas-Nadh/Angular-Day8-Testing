import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changePage event on signup link click', () => {
    spyOn(component.changePage, 'emit'); 
    const signupLink = fixture.debugElement.query(By.css('.link-primary'));
    signupLink.triggerEventHandler('click', null); 
    expect(component.changePage.emit).toHaveBeenCalled();
  });

  it('should create a form with username and password controls', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('username')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('should not display required error message initially for password field', () => {
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    passwordInput.value = 'validpassword'; // Set a valid password initially
    passwordInput.dispatchEvent(new Event('input')); // Trigger input event
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('.form-text'));
    expect(errorMessage).toBeNull(); // Error message should not be displayed initially
  });

  it('should be invalid when form fields are empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });


  
});
