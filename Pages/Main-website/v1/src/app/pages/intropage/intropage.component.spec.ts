import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntropageComponent } from './intropage.component';

describe('IntropageComponent', () => {
  let component: IntropageComponent;
  let fixture: ComponentFixture<IntropageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntropageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
