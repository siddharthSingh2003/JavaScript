//for of

let arr = [3, 4, 5, 6, 7]

// for (const num of arr) {
//     console.log(num);
// }

//maps

const map = new Map()
map.set('IN', "india")
map.set("US", "uSA")

for (const [key, value] of map) {
    console.log(key, ':',value);
    
}

// objects are not iteratable 