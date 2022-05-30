function giaiPTBacNhat(a,b) {
    if (a === 0) {
        if (b === 0) {
            return 'Phương trình vô số nghiệm';
        }
        return 'Phương trình vô nghiệm';
    }
    else {
        return -b/a;
    }
}
let result = giaiPTBacNhat(5,8);
console.log(result);

function checkInArray(n,arr) {
    for (let i = 0; i <= arr.length-1;i++) {
        if (arr[i] === n ) {
            return i;
        }
    }
    return 'Giá trị không nằm trong mảng';
}
let arrTest = [0,3,2,5,-1];
let n = +prompt('Bài 2 Nhập giá trị cần tìm trong mảng');
indexTest = checkInArray(n,arrTest);
console.log(indexTest);

function countKiTuNguyenAm(arrString) {
    let count = 0;
    for (let i = 0;i<=arrString.length-1;i++) {
        if (arrString[i] === 'a'
        || arrString[i] === 'o'
        || arrString[i] === 'e'
        || arrString[i] === 'u'
        || arrString[i] === 'i') {
            count++;
        }
    }
    if (count === 0) {
        return false;
    }
    return count;
}
let inputStr = prompt('Nhập chuỗi');
let newArr = [];
for (let i = 0;i<=inputStr.length-1;i++) {
    newArr[i] = inputStr[i];
}
console.log(countKiTuNguyenAm(newArr));

let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);

console.log(objAnimal1.toString());
let objAnimal2 = new Animal('Mouse',30);
console.log(objAnimal2.toString());
