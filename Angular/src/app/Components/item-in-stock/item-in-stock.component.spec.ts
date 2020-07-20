import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInStockComponent } from './item-in-stock.component';

describe('ItemInStockComponent', () => {
  let component: ItemInStockComponent;
  let fixture: ComponentFixture<ItemInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
