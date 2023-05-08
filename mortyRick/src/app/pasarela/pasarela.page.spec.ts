import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasarelaPage } from './pasarela.page';

describe('PasarelaPage', () => {
  let component: PasarelaPage;
  let fixture: ComponentFixture<PasarelaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasarelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
