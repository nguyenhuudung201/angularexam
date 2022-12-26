import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilebarComponent } from './silebar.component';

describe('SilebarComponent', () => {
  let component: SilebarComponent;
  let fixture: ComponentFixture<SilebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
