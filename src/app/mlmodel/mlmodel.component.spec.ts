import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlmodelComponent } from './mlmodel.component';

describe('MlmodelComponent', () => {
  let component: MlmodelComponent;
  let fixture: ComponentFixture<MlmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
