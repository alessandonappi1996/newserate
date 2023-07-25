import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerateComponent } from './add-serate.component';

describe('AddSerateComponent', () => {
  let component: AddSerateComponent;
  let fixture: ComponentFixture<AddSerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
