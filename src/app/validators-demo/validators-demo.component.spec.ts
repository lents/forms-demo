import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsDemoComponent } from './validators-demo.component';

describe('ValidatorsDemoComponent', () => {
  let component: ValidatorsDemoComponent;
  let fixture: ComponentFixture<ValidatorsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatorsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
