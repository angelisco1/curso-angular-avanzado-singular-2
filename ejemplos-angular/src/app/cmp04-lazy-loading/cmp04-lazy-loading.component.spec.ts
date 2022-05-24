import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04LazyLoadingComponent } from './cmp04-lazy-loading.component';

describe('Cmp04LazyLoadingComponent', () => {
  let component: Cmp04LazyLoadingComponent;
  let fixture: ComponentFixture<Cmp04LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04LazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
