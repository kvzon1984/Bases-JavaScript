const rest = (a, ...argumentos) => {
    console.log(a)
    console.log(argumentos)
}

// rest(1, 2, 3, 4)

const obj = {
    a:1, b:2, c:3, d:4
}

const { a, b, ...restObj} = obj
console.log(a,b, restObj);

const arr = [1,2,3,4,5]

const [e, f, ...r] = arr

console.log(e, f, r);