const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(discriptor);

const chai = {
    name: 'new chai',
    price: 230,
    isAvilable: true

}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable:false
// })

// console.log((Object.getOwnPropertyDescriptor(chai, 'name')));

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key}: ${value}`);
}