import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframeConfigComponent } from './warframe-config.component';

describe('WarframeConfigComponent', () => {
  let component: WarframeConfigComponent;
  let fixture: ComponentFixture<WarframeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarframeConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarframeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
