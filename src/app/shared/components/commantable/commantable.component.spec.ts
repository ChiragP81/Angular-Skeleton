import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommantableComponent } from './commantable.component';

describe('CommantableComponent', () => {
  let component: CommantableComponent;
  let fixture: ComponentFixture<CommantableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommantableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommantableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
