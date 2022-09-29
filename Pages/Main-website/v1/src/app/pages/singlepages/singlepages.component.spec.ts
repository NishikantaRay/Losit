import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepagesComponent } from './singlepages.component';

describe('SinglepagesComponent', () => {
  let component: SinglepagesComponent;
  let fixture: ComponentFixture<SinglepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
