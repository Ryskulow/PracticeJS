const multiply = massive => {
    return function (number) {
        return massive.map(elem => {
            return elem*number
        })
    }
}