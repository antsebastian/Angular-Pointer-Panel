
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerPanelList } from './pointer-panel-list';

describe('PointerPanelList', () => {
  let component: PointerPanelList<any>;
  let fixture: ComponentFixture<PointerPanelList<any>>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerPanelList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointerPanelList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
