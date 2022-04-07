// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (COCK) {
cats.push(COCK)
}
function destructivelyPrependCat(DICK) {
cats.unshift(DICK)
}
function destructivelyRemoveLastCat(boy) {
cats.pop(boy)
}
function destructivelyRemoveFirstCat(girl) {
cats.shift(girl)
}
function appendCat(David) {
const kittens = [...cats]
kittens.push(David)
return kittens
}
function prependCat(jon) {
const kitty = [...cats]
kitty.unshift(jon)
return kitty
}
function removeLastCat(corey) {
const remove = [...cats]
remove.pop(corey)
return remove
}
function removeFirstCat(cool) {
const jeff = [...cats]
jeff.shift(cool)
return jeff
}



