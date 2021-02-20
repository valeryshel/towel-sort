
// You should implement your task here.

module.exports = function towelSort (matrix) {
    matrix.map(function (curr, index) {
        if(index%2) {
            curr.reverse();
        } else {
            curr;
        }
    });
}
