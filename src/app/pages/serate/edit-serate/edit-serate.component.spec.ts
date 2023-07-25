import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerateComponent } from './edit-serate.component';

describe('EditSerateComponent', () => {
  let component: EditSerateComponent;
  let fixture: ComponentFixture<EditSerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
