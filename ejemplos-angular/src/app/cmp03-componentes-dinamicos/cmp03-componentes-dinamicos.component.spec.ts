import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03ComponentesDinamicosComponent } from './cmp03-componentes-dinamicos.component';

describe('Cmp03ComponentesDinamicosComponent', () => {
  let component: Cmp03ComponentesDinamicosComponent;
  let fixture: ComponentFixture<Cmp03ComponentesDinamicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03ComponentesDinamicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03ComponentesDinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
