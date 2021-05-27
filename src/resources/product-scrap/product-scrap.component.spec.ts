import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductScrapComponent } from './product-scrap.component';

describe('ProductScrapComponent', () => {
  let component: ProductScrapComponent;
  let fixture: ComponentFixture<ProductScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductScrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
