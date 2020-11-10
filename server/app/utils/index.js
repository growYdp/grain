function strToNum(arr) {
  for (let key in arr) {
    arr[key] = Number(arr[key])
  }
  return arr
}

module.exports = {
  strToNum
}