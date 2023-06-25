const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];

function intersect(x, y) {
    let rez = []
    for (i in x){
        for (j in y){
            if (x[i] === y[j]){
                rez.push(x[i])
            }
        }
    }
    return rez
}
console.log(intersect(array0, array1));