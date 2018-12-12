import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenRenderizadaComponent } from './imagen-renderizada.component';

describe('ImagenRenderizadaComponent', () => {
  let component: ImagenRenderizadaComponent;
  let fixture: ComponentFixture<ImagenRenderizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenRenderizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenRenderizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
