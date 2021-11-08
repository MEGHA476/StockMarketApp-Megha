import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstockComponent } from './liststock.component';

describe('ListstockComponent', () => {
  let component: ListstockComponent;
  let fixture: ComponentFixture<ListstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
