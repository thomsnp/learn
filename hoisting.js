
console.log(calc());
// console.log(f1()); //in-scope variable that refers to a function is not hoisted


function calc(params) {
    return 22;    
}

var f1 = function (params) {
    return 33;
}