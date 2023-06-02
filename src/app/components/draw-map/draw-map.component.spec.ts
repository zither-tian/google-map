import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawMapComponent } from './draw-map.component';

describe('DrawMapComponent', () => {
  let component: DrawMapComponent;
  let fixture: ComponentFixture<DrawMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
