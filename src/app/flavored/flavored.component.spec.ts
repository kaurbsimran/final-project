import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavoredComponent } from './flavored.component';

describe('FlavoredComponent', () => {
  let component: FlavoredComponent;
  let fixture: ComponentFixture<FlavoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
