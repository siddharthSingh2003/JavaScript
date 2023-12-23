//singelton

const tinderUser= new Object()

tinderUser.id="01";
tinderUser.fullName="shak"

tinderUser.User={
    FirstName:"shakis",
    lastName:"ram",
    Address:{
        Home:"123 block C",
        Area:{
            city:"brooklyn",
            neighbour:"New York"
        }
    }
}
//console.log(tinderUser.User.Address.Area.city)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
Object.assign(obj1,obj2)
console.log(obj1)

// const obj3={...obj1,...obj2}
// console.log(obj3)