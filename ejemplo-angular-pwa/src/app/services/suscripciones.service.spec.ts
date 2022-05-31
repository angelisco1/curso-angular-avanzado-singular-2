import { TestBed } from '@angular/core/testing';

import { SuscripcionesService } from './suscripciones.service';

xdescribe('SuscripcionesService', () => {
  let service: SuscripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
