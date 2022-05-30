import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesPagarComponent } from './botones-pagar.component';

describe('BotonesPagarComponent', () => {
  let component: BotonesPagarComponent;
  let fixture: ComponentFixture<BotonesPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
