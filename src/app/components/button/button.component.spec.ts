import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have border-radius 4px', () => {
    const buttonElement = fixture.nativeElement.querySelector('button'); // Get the native button element

    // Get computed styles of the button element
    const computedStyles = window.getComputedStyle(buttonElement);
    const borderRadius = computedStyles.getPropertyValue('border-radius');

    expect(borderRadius).toBe('4px'); // Assert that border-radius is 4px
  });
});
