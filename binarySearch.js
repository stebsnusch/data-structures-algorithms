function binarySearch(array, target) {
    if(array.length === 0) return false;

    return binarySearchHelper(0, array.length - 1, target, array);
}

function binarySearchHelper(startIndx, endIndx, target, array) {
    const middleIndx = Math.floor((startIndx + endIndx) / 2);

    if(startIndx > endIndx){
        console.log("num tem :(");
        return false;
    };

    if(array[middleIndx] === target) {
        console.log(middleIndx);
        return middleIndx;
    } else if(target > array[middleIndx]) {
        console.log(`${target} é maior do que ${array[middleIndx]}`);
        return binarySearchHelper(middleIndx + 1, endIndx, target, array);
    } else if(target < array[middleIndx]) {
        console.log(`${target} é menor do que ${array[middleIndx]}`);
        return binarySearchHelper(startIndx, middleIndx - 1, target, array);
    }
}

const array = [12, 24, 36, 41, 58, 90, 104, 333];
const target = 50;

binarySearch(array, target);
