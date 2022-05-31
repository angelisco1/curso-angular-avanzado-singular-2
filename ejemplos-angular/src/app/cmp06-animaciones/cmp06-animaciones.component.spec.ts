import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06AnimacionesComponent } from './cmp06-animaciones.component';

describe('Cmp06AnimacionesComponent', () => {
  let component: Cmp06AnimacionesComponent;
  let fixture: ComponentFixture<Cmp06AnimacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp06AnimacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp06AnimacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
