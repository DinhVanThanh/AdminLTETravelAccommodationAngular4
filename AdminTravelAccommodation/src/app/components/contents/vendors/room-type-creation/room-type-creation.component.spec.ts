import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeCreationComponent } from './room-type-creation.component';

describe('RoomTypeCreationComponent', () => {
  let component: RoomTypeCreationComponent;
  let fixture: ComponentFixture<RoomTypeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
