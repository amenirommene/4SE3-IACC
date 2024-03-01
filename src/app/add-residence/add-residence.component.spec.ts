import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidenceComponent } from './add-residence.component';

describe('AddResidenceComponent', () => {
  let component: AddResidenceComponent;
  let fixture: ComponentFixture<AddResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
