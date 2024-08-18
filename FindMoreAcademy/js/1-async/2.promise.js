//To use when we do not have many steps to go
function asyncFunction(callback, delay){
    console.log("[1] :: Operão inicia")

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("[2] :: Operação conclui")
            resolve()
            //reject("reason: Erro ao executar operação")
        })
    }, delay)

}

function callbackFunction(){
    console.log("[3] :: Callback executado")
}

asyncFunction(2000)
    .then(callbackFunction)
    .catch(function(error){
        console.log("[4] :: Promessa rejeitada com o erro: " + error)
    })

console.log("[5] Execução continua...")



