const temp = [1,2,3,4,5]
const temp2 = [6,7,8,9]
// console.log(...temp,...temp2);

const temp3 = [...temp,...temp2]
// console.log(temp3);

const obj = {
    x : 1,
    y : 2,
    z : 3,
    array : [4,5,6],
    obj : {
        a : 7,
        b : 8
    }
}
const obj2 = {
    m : 10,
    n : 11,
    p : 12
}

const obj3 = {...obj,...obj2}
console.log(obj)
console.log(obj2);
console.log(obj3);


