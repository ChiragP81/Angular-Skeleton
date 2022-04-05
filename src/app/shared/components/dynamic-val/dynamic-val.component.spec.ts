import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicValComponent } from './dynamic-val.component';

describe('DynamicValComponent', () => {
  let component: DynamicValComponent;
  let fixture: ComponentFixture<DynamicValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
