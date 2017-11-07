import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationCreationComponent } from './accommodation-creation.component';

describe('AccommodationCreationComponent', () => {
  let component: AccommodationCreationComponent;
  let fixture: ComponentFixture<AccommodationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
