import { Calculadora } from './app.ts';

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test('Deve retornar a soma de 1+1', () => {

    const result = new Calculadora().somar(1,1);

    assertEquals(result, 2);
});
