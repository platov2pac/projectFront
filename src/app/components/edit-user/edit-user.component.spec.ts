import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUSerComponent } from './edit-user.component';

describe('EditUSerComponent', () => {
  let component: EditUSerComponent;
  let fixture: ComponentFixture<EditUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
