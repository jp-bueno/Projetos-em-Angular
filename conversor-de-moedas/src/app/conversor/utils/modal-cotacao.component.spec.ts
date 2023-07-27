import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContacaoComponent } from './modal-cotacao.component';

describe('ModalContacaoComponent', () => {
  let component: ModalContacaoComponent;
  let fixture: ComponentFixture<ModalContacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContacaoComponent]
    });
    fixture = TestBed.createComponent(ModalContacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
