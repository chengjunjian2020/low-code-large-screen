export const recursion = (array, child = 'child', callback) => {
  if (Array.isArray(array) && array.length === 0) {
    return
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i][child] && array[i][child].length > 0) {
      recursion(array[i][child], child, callback)
    }
    callback && callback(array[i])
  }
}

export const hasChildren = (array, child) => {
  if (!array) {
    return false
  }
  if (!array[child] || (array[child] && array[child].length < 1)) {
    return false
  }
  return true
}
