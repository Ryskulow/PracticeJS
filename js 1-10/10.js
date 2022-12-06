const multiply2Max = (a) => (b) => (c) => {
    if (a % 2 === 0) console.log(a)
    else if (b % 2 === 0) console.log(b)
    else if (c % 2 === 0) console.log(c)
    else console.log(0)
}
multiply2Max(1)(2)(3); // 2
multiply2Max(4)(4)(1); // 4
multiply2Max(3)(0)(5); // 0