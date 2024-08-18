function asyncFunction(callback, delay){
    console.log("[1] :: Operão inicia")

    setTimeout(function(){
        console.log("[2] :: Operão conclui")
        callback()
    }, delay)

}

function callbackFunction(){
    console.log("[3] :: Callback executado")
}


asyncFunction(callbackFunction, 2000)

console.log("[4] :: Execução continua...")
