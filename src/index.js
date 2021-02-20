
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix === ''|| !matrix.length) {
        return [];
    }
    let newArr = [];

    newArr = matrix.map((curr, index)=>index%2?curr.reverse():curr);

    return newArr.flat();
}
