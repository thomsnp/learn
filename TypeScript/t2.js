var x = 10;
function subfn(cb) {
    if (x === 10) {
        cb();
    }
    console.log("End of subfn");
}
function mainfn() {
    console.log("Start of mainfn");
    subfn(function () {
        x -= 10;
        console.log("x=", x);
    });
    console.log("End of mainfn");
}
mainfn();
