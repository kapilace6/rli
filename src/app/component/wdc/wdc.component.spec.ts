import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdcComponent } from './wdc.component';

describe('WdcComponent', () => {
  let component: WdcComponent;
  let fixture: ComponentFixture<WdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
