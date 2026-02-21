import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocusnewsProductComponent } from './infocusnews-product.component';

describe('InfocusnewsProductComponent', () => {
  let component: InfocusnewsProductComponent;
  let fixture: ComponentFixture<InfocusnewsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfocusnewsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocusnewsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
