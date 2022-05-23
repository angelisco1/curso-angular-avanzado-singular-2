import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02ViewchildComponent } from './cmp02-viewchild.component';

describe('Cmp02ViewchildComponent', () => {
  let component: Cmp02ViewchildComponent;
  let fixture: ComponentFixture<Cmp02ViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02ViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02ViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
