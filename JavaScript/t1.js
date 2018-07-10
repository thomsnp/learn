function* notepad(){
    let i=0;
    while(true){
        yield i++;
    }
}

let gen = notepad();

function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var genb = idMaker();

console.log(genb.next().value); // 0
console.log(genb.next().value); // 1
console.log(genb.next().value); // 2

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);