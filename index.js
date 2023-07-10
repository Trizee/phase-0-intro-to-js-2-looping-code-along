// Code your solutions in this file
const names = ["Joe", "Jack", "John"]

function writeCards(names){
    let array = []
    for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return array;
}

function countDown(){
    let countDown = 10;
    while (countDown > -1){
        console.log(countDown --)
    }
}