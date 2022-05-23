import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp01TransclusionComponent } from './cmp01-transclusion.component';

describe('Cmp01TransclusionComponent', () => {
  let component: Cmp01TransclusionComponent;
  let fixture: ComponentFixture<Cmp01TransclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp01TransclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp01TransclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
