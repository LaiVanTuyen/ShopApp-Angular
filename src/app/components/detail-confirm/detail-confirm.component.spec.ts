import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConfirmComponent } from './detail-confirm.component';

describe('DetailConfirmComponent', () => {
  let component: DetailConfirmComponent;
  let fixture: ComponentFixture<DetailConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailConfirmComponent]
    });
    fixture = TestBed.createComponent(DetailConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
