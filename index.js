// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    let copyCat = [...cats];
    copyCat.push(name);
    return copyCat;
}

function prependCat(name) {
    let copyCat = [...cats];
    copyCat.unshift(name);
    return copyCat;
}

function removeLastCat() {
    let copyCat = [...cats];
    copyCat.pop();
    return copyCat;
}

function removeFirstCat() {
    let copyCat = [...cats.slice(1)];
    return copyCat;
}