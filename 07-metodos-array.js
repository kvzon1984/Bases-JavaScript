const arr = [1,2,3,4,5]

// filter

const r = arr.filter(el => el>2)

console.log(r);

// map

const m = arr.map((el) => el*2)
console.log(m);

// reduce

// const reduce1 = arr.reduce((acomulador, elemento) => acomulador + elemento, 0)

const getMax = (a,b) => Math.max(a,b) 

const reduce1 = arr.reduce(getMax)

console.log(reduce1);
