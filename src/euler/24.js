const getPermutationNum = n => {
  let c = Array(10).fill(0);
  let per = 0;
  for (c[0] = 0; c[0] < 10; c[0]++) {
    for (c[1] = 0; c[1] < 10; c[1]++) {
      if (c[1] === c[0]) continue;
      for (c[2] = 0; c[2] < 10; c[2]++) {
        if (c[2] === c[0]) continue;
        if (c[2] === c[1]) continue;
        for (c[3] = 0; c[3] < 10; c[3]++) {
          if (c[3] === c[0]) continue;
          if (c[3] === c[1]) continue;
          if (c[3] === c[2]) continue;
          for (c[4] = 0; c[4] < 10; c[4]++) {
            if (c[4] === c[0]) continue;
            if (c[4] === c[1]) continue;
            if (c[4] === c[2]) continue;
            if (c[4] === c[3]) continue;
            for (c[5] = 0; c[5] < 10; c[5]++) {
              if (c[5] === c[0]) continue;
              if (c[5] === c[1]) continue;
              if (c[5] === c[2]) continue;
              if (c[5] === c[3]) continue;
              if (c[5] === c[4]) continue;
              for (c[6] = 0; c[6] < 10; c[6]++) {
                if (c[6] === c[0]) continue;
                if (c[6] === c[1]) continue;
                if (c[6] === c[2]) continue;
                if (c[6] === c[3]) continue;
                if (c[6] === c[4]) continue;
                if (c[6] === c[5]) continue;
                for (c[7] = 0; c[7] < 10; c[7]++) {
                  if (c[7] === c[0]) continue;
                  if (c[7] === c[1]) continue;
                  if (c[7] === c[2]) continue;
                  if (c[7] === c[3]) continue;
                  if (c[7] === c[4]) continue;
                  if (c[7] === c[5]) continue;
                  if (c[7] === c[6]) continue;
                  for (c[8] = 0; c[8] < 10; c[8]++) {
                    if (c[8] === c[0]) continue;
                    if (c[8] === c[1]) continue;
                    if (c[8] === c[2]) continue;
                    if (c[8] === c[3]) continue;
                    if (c[8] === c[4]) continue;
                    if (c[8] === c[5]) continue;
                    if (c[8] === c[6]) continue;
                    if (c[8] === c[7]) continue;
                    for (c[9] = 0; c[9] < 10; c[9]++) {
                      if (c[9] === c[0]) continue;
                      if (c[9] === c[1]) continue;
                      if (c[9] === c[2]) continue;
                      if (c[9] === c[3]) continue;
                      if (c[9] === c[4]) continue;
                      if (c[9] === c[5]) continue;
                      if (c[9] === c[6]) continue;
                      if (c[9] === c[7]) continue;
                      if (c[9] === c[8]) continue;
                      per++;
                      if (per === n) return c.join("");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

console.log(getPermutationNum(1000000));
