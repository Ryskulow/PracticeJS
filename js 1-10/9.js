function Gandalf() {
    console.log("You shall not pass!");
}
function run() {
    console.log("Fly, you fools!");
}


function call(n, b) {
    let result = ""
    for (let i = 0; i < n; i++){
        result = result + b()
    } return result
}
call(5, run)