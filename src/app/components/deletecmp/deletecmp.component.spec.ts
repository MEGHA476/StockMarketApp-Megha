import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecmpComponent } from './deletecmp.component';

describe('DeletecmpComponent', () => {
  let component: DeletecmpComponent;
  let fixture: ComponentFixture<DeletecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
