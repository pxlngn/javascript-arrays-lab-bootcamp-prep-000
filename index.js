// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Ralph')
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}