import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateLayoutComponent } from './affiliate-layout.component';

describe('ClientLayoutComponent', () => {
  let component: AffiliateLayoutComponent;
  let fixture: ComponentFixture<AffiliateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
