import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingOneComponentToAnotherComponentComponent } from './data-sharing-one-component-to-another-component.component';

describe('DataSharingOneComponentToAnotherComponentComponent', () => {
  let component: DataSharingOneComponentToAnotherComponentComponent;
  let fixture: ComponentFixture<DataSharingOneComponentToAnotherComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingOneComponentToAnotherComponentComponent]
    });
    fixture = TestBed.createComponent(DataSharingOneComponentToAnotherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
