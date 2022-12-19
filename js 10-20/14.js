const carsStorage = {
    addModel: function (marka) {
        return function (count) {
            if (carsStorage[marka] === undefined) carsStorage[marka] = count;
            else carsStorage[marka] += count;
        }
    }
}

const toyotaAdder = carsStorage.addModel("Toyota")
const fordAdder = carsStorage.addModel("Ford")

toyotaAdder(4)
toyotaAdder(3)

fordAdder(1)
fordAdder(5)

console.log(carsStorage.Toyota) // 7
console.log(carsStorage.Ford) // 6
console.log(carsStorage.Tesla) // undefined

const teslaAdder = carsStorage.addModel("Tesla")

teslaAdder(9)

console.log(carsStorage.Tesla) // 9dModel()
console.log(carsStorage)