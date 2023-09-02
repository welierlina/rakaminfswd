const arr = [9,7,5,3,1,11,13,15,17,19,29,27,25,23,21,31,39,37,35,33,49,41,47,45,43,50,2,48,46,4,44,6,42,8,40,10,12,18,14,16,28,26,22,24,32,38,34,36,20,30,
51,52,53,54,55,56,57,58,58,60,70,80,90,100,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99]
const ganjil = []
const genap = []
let total_ganjil = 0;
let total_genap = 0;


for (let i = 0; i <= 100; i++) {
    arr.push();
}
console.log(arr);

for (var i = 0; i < 50; i++) {
    if (arr[i] %2 == 0) {
        genap.push(arr[i]);
    } else {
        ganjil.push(arr[i]);
    }
}
console.log("array ganjil");
console.log(ganjil);
console.log("=====================================================================================");
console.log("array genap");
console.log(genap);


for (let i=0; i<ganjil.length; i++) {
    if (i==0)
    {
        var max_gjl = ganjil[i];
    }
    else
    {
        if (ganjil[i] > max_gjl)
        {
            max_gjl = ganjil[i];
        }            
    }
}
console.log("nilai maximal pada array ganjil : " + max_gjl);

for (let i=0; i<ganjil.length; i++) {
    if (i==0)
    {
        var max_gjl = ganjil[i];
    }
    else
    {
        if (ganjil[i] < max_gjl)
        {
            min_gjl = ganjil[i];
        }            
    }
}
console.log("nilai minimal pada array ganjil : " + min_gjl);

for (i=0; i<ganjil.length; i++) {
    total_ganjil += ganjil[i];
}
console.log ("total nilai ganjil : " + total_ganjil);

for ( var i = 0; i < ganjil.length; i++) {
    total_ganjil += parseFloat(ganjil[i]);
    var rata_ganjil = total_ganjil / ganjil.length;
}
console.log("hasil rata rata ganjil : " + rata_ganjil)

console.log("=====================================================================================");

for (let i=0; i<genap.length; i++) {
    if (i==0)
    {
        var max_gnp = genap[i];
    }
    else
    {
        if (genap[i] > max_gnp)
        {
            max_gnp = genap[i];
        }            
    }
}
console.log("nilai maximal pada array genap : " + max_gnp);

for (let i=0; i<genap.length; i++) {
    if (i==0)
    {
        var min_gnp = genap[i];
    }
    else
    {
        if (genap[i] < min_gnp)
        {
            min_gnp = genap[i];
        }            
    }
}
console.log("nilai minimal pada array genap : " + min_gnp);

for (i=0; i<genap.length; i++) {
    total_genap += genap[i];
}
console.log ("total nilai genap : " + total_genap);

for ( var i = 0; i < genap.length; i++) {
    total_genap += parseFloat(genap[i]);
    var rata_genap = total_genap / genap.length;
}
console.log("hasil rata rata genap : " + rata_ganjil)

console.log("=====================================================================================");

console.log("nilai maksimal lebih besar array genap")
console.log("nilai minimal lebih besar array genap")
console.log("nilai total lebih besar array genap")
console.log("hasil rata rata kedua array sama")



