import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { Calculadora } from './calculadora.ts';

// Biblioteca de testes nativa
Deno.test('Deve retornar a soma de 1+1', () => {

    const result = new Calculadora().somar(1,1);

    assertEquals(result, 2);
});
