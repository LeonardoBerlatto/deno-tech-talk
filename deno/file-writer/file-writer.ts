await Deno.writeFile('./exemplo.txt', new TextEncoder().encode('texto'));

console.log('terminei')