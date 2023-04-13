const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3]
// El spread operator nos permite poder tomar valores que se encuentran dentro de un arreglo o objeto y exparcirlos dependiendo de los contexto

// fn(arr[0], arr[1], arr[2])
fn(...arr)

const arr1 = [4,5]

// const arr2 = arr.concat(arr1)
// const arr2 = [...arr, ...arr1]
const arr2 = [...arr, 9, 8]
arr[0] = 'Hola mundo'

console.log(arr, arr2);

const obj1 = {a: 1, b: 2}
const obj2 = {b: 5, c: 'Hola mundo'}
const obj3 = { ...obj1 }
obj1.a=10

console.log(obj3, obj1);

const obj4 = { ...obj1, ...obj2 }

console.log(obj4);

const obj5 = {
    ...obj1,
    loading : true,
    data: {
        prop: 'lala',
        animal: 'perrito'
    }
}

console.log(obj5);
