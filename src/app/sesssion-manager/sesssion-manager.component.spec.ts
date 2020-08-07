import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesssionManagerComponent } from './sesssion-manager.component';

describe('SesssionManagerComponent', () => {
  let component: SesssionManagerComponent;
  let fixture: ComponentFixture<SesssionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesssionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesssionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
