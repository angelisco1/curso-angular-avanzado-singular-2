import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { VendehumosService } from '../services/vendehumos.service';

import { ListaVendehumosComponent } from './lista-vendehumos.component';

describe('ListaVendehumosComponent', () => {
  let component: ListaVendehumosComponent;
  let fixture: ComponentFixture<ListaVendehumosComponent>;
  let mockVendehumosService: jasmine.SpyObj<VendehumosService>;

  beforeEach(async () => {
    mockVendehumosService = jasmine.createSpyObj(VendehumosService, ['getVendehumos', 'updateVotosVendehumo'])

    await TestBed.configureTestingModule({
      declarations: [ListaVendehumosComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [{ provide: VendehumosService, useValue: mockVendehumosService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendehumosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de pintar un div por cada vendehumos de la lista', () => {
    const mockVendehumos = [
      { "id": 0, "nombre": "", "descripcion": "", "labels": ["a"], "numVotos": 39 },
      { "id": 1, "nombre": "", "descripcion": "", "labels": ["b"], "numVotos": 3 }
    ]
    mockVendehumosService.getVendehumos.and.returnValue(of(mockVendehumos))

    fixture.detectChanges();

    const listaDivs = fixture.debugElement.queryAll(By.css('div'))
    expect(listaDivs).toHaveSize(2)
  })

  it('algo asincrono', (done) => {

    of([1, 2, 3]).subscribe((lista) => {
      expect(lista).toContain(2)
      done()
    })
  })

  it('algo asincrono', (done) => {

    of([1, 2, 3]).pipe(delay(2000)).subscribe((lista) => {
      expect(lista).toContain(3)
      done()
    })
  })
});
