/*const array = [1, 2, 3, 4, 5]

console.log(array.map((item) => item * 2));

console.log(array);
*/

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(num));

console.log(num);
