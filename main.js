let animals = ["dog", "cat"]
function pluralize(noun, num){
    if (num == 1){
        console.log(`${num} ${noun}`)
    }
    else {
        console.log(`${num} ${noun}s`)
    }
}
pluralize(animals[0], 3)
pluralize(animals[1], 1)