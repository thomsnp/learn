let i = 0;
var fz = function foil(params) {
    i++;
    if (i < 10) {
        console.log("inner eye", i);
        fz();
    }
    console.log("params", i);
    return
}

fz();
