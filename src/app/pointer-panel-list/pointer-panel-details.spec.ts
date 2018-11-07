import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerPanelDetails } from './pointer-panel-details';

describe('PointerPanelDetails', () => {
  let component: PointerPanelDetails<boolean>;
  let fixture: ComponentFixture<PointerPanelDetails<boolean>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerPanelDetails ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<PointerPanelDetails<boolean>>(PointerPanelDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
