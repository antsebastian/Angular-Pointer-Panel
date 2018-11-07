import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerPanelItem } from './pointer-panel-item';

describe('PointerPanelItem', () => {
  let component: PointerPanelItem;
  let fixture: ComponentFixture<PointerPanelItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerPanelItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerPanelItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
