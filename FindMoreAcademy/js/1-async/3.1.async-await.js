//To use when we have many steps to go
function asyncFunction(delay){
    console.log("[1] :: Operação inicia")

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("[2] :: Operação conclui")
            resolve("[3] :: Promessa resolvida")
        }, delay)
    })
}

async function asyncAwait(delay){
    console.log("[1] :: Operação inicia")

    try {
        const message = await asyncFunction(delay)

        console.log(message)
    } catch(error){
        console.log("[4] :: Promessa rejeitada com o erro: " + error)
    }
}

asyncAwait(2000)

console.log("[5] Execução continua...")