//  9  ##################################  9

let a;
let b;
let c;
let found = false;
for (a = 1; !found && a < 1000; a++)
  for (b = a + 1; !found && b < 1000; b++) {
    c = 1000 - a - b;
    if (square(c) == square(a) + square(b)) {
      console.log(a * b * c);
    }
  }
