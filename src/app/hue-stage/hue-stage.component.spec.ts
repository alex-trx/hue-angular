import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueStageComponent } from './hue-stage.component';

describe('HueStageComponent', () => {
  let component: HueStageComponent;
  let fixture: ComponentFixture<HueStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
