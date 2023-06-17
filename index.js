// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    return cats
  });

function destructivelyAppendCat(Ralph){
  cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(){
     cats.pop(-1)
}

function destructivelyRemoveFirstCat(){
    cats.shift(1)
}
let newcat=[Broom,...cats]
(function appendCat(Broom){
    return cats
}
)