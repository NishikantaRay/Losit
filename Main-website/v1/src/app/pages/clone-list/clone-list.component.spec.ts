import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneListComponent } from './clone-list.component';

describe('CloneListComponent', () => {
  let component: CloneListComponent;
  let fixture: ComponentFixture<CloneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
