import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSmartTableComponent } from './listado-smart-table.component';

describe('ListadoSmartTableComponent', () => {
  let component: ListadoSmartTableComponent;
  let fixture: ComponentFixture<ListadoSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
