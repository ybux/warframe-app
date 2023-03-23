import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframeComponent } from './warframe.component';

describe('WarframeComponent', () => {
  let component: WarframeComponent;
  let fixture: ComponentFixture<WarframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
