
const printFromOneToHundred = () => {
    var itemList = []
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 & i % 5 === 0) {
            itemList.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            itemList.push("Fizz")
        }
        else if (i % 5 === 0) {
            itemList.push("Buzz")
        }
        else {
            itemList.push(i)
        }
    }
    return itemList
}
module.exports={printFromOneToHundred}
console.log(printFromOneToHundred())
