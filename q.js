var s = new Set([12, 23, 5, 00]);

var c = [1, 2, 3, 4, 5];

var [...x] = c;

function makeIterator(array) {
    var nextIndex = 0;

    console.log("wie heibt ");


        let next = function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };

    };
}

// function f1() {
//     var i = 0;

//     var nb = function() {
//         console.log(":");
//     }
//     nb();
//     console.log(1021);
// }

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true