module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  } else {
    matrix.map((i, index) => {
      return index % 2 !== 0 ? i.reverse() : null;
    })
}
return matrix.flat()
}
