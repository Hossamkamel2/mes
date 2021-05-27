import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacinesComponent } from './macines.component';

describe('MacinesComponent', () => {
  let component: MacinesComponent;
  let fixture: ComponentFixture<MacinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
