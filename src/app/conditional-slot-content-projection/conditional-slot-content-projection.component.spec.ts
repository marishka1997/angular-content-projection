import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotContentProjectionComponent } from './conditional-slot-content-projection.component';

describe('ConditionalSlotContentProjectionComponent', () => {
  let component: ConditionalSlotContentProjectionComponent;
  let fixture: ComponentFixture<ConditionalSlotContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalSlotContentProjectionComponent]
    });
    fixture = TestBed.createComponent(ConditionalSlotContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
