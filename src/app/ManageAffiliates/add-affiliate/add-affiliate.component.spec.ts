import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffiliateComponent } from './add-affiliate.component';

describe('AddAffiliateComponent', () => {
  let component: AddAffiliateComponent;
  let fixture: ComponentFixture<AddAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
