import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcharacterPage } from './addcharacter.page';

describe('AddcharacterPage', () => {
  let component: AddcharacterPage;
  let fixture: ComponentFixture<AddcharacterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddcharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
