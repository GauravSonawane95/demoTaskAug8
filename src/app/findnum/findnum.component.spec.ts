import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindnumComponent } from './findnum.component';

describe('FindnumComponent', () => {
  let component: FindnumComponent;
  let fixture: ComponentFixture<FindnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindnumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
