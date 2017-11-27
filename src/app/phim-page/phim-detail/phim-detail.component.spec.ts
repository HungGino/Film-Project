import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimDetailComponent } from './phim-detail.component';

describe('PhimDetailComponent', () => {
  let component: PhimDetailComponent;
  let fixture: ComponentFixture<PhimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
