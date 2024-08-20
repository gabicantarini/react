//Web Workers
//API do Javascript que nos permite executar código em plano de fundo de modo a não bloquear a interface ao utilizador.
//As execuções de tarefas mais demoradas ou chamadas a uma API podem ser feitas em plano de fundo sem afetar o desempenho da aplicação web.



self.importScripts("./calc.js")

self.onmessage = ({ data }) => {
    if (data.action === "doCalc") {
        const result = doCalc()

        self.postMessage({
            action: data.action,
            result
        })
    }
}