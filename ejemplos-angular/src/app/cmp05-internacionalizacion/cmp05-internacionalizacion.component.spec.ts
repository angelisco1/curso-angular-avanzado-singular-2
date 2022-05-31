import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05InternacionalizacionComponent } from './cmp05-internacionalizacion.component';

describe('Cmp05InternacionalizacionComponent', () => {
  let component: Cmp05InternacionalizacionComponent;
  let fixture: ComponentFixture<Cmp05InternacionalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05InternacionalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05InternacionalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
