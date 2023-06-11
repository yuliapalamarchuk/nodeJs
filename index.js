let m = 20;

simpleNumbers:
    for (let i = 2; i <= m; i++) {

        for (let n = 2; n < i; n++) {
            if (i % n == 0) continue simpleNumbers
        }

        console.log(i);

    }
