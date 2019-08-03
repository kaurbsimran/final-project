import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGetComponent } from './login-get.component';

describe('LoginGetComponent', () => {
  let component: LoginGetComponent;
  let fixture: ComponentFixture<LoginGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
