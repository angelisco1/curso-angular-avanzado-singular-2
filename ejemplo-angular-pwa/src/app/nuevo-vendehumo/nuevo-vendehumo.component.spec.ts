import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { VendehumosService } from '../services/vendehumos.service';

import { NuevoVendehumoComponent } from './nuevo-vendehumo.component';

describe('NuevoVendehumoComponent', () => {
  let component: NuevoVendehumoComponent;
  let fixture: ComponentFixture<NuevoVendehumoComponent>;
  let mockVendehumosService: jasmine.SpyObj<VendehumosService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockVendehumosService = jasmine.createSpyObj(VendehumosService, ['createVendehumo'])
    mockRouter = jasmine.createSpyObj(Router, ['navigateByUrl'])

    await TestBed.configureTestingModule({
      declarations: [NuevoVendehumoComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: VendehumosService, useValue: mockVendehumosService },
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de navegar a / cuando se crea un vendehumos', () => {
    mockVendehumosService.createVendehumo.and.returnValue(of({}))

    component.formVendehumo.setValue({ nombre: 'V1', descripcion: 'D1', numVotos: 0, labels: [] })

    fixture.detectChanges()

    component.guardar()

    expect(mockRouter.navigateByUrl).toHaveBeenCalledOnceWith('/')
  })

});
