import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { inject } from '@angular/core';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sum should be 5', () => {
    expect(service.calcular(1,4, CalculadoraService.SOMA)).toEqual(5);
  });

});
