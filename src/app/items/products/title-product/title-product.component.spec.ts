import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProductComponent } from './title-product.component';

describe('TitleServiceComponent', () => {
  let component: TitleProductComponent;
  let fixture: ComponentFixture<TitleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
