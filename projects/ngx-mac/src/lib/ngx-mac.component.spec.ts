import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMacComponent } from './ngx-mac.component';

describe('NgxMacComponent', () => {
  let component: NgxMacComponent;
  let fixture: ComponentFixture<NgxMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
