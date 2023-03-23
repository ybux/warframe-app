import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoultComponent } from './layoult.component';

describe('LayoultComponent', () => {
  let component: LayoultComponent;
  let fixture: ComponentFixture<LayoultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
