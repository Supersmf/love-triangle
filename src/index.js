/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(array = []) {
    let res = [];
    array.forEach((item, i, arr) => {
        if (item > i && arr[item - 1] !== item) {
            if (arr[arr[item - 1] - 1] === (i + 1)) {
                res.push(item * arr[item - 1] * arr[arr[item - 1] - 1]);
            }
        }
    });
    res = res.filter((item, pos) => res.indexOf(item) == pos);
    return res.length;
};