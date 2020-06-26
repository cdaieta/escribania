import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaClienteComponent } from './baja-cliente.component';

describe('BajaClienteComponent', () => {
  let component: BajaClienteComponent;
  let fixture: ComponentFixture<BajaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
