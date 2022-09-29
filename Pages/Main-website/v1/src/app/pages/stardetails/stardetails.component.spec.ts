import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StardetailsComponent } from './stardetails.component';

describe('StardetailsComponent', () => {
  let component: StardetailsComponent;
  let fixture: ComponentFixture<StardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
