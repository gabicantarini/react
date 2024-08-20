//Promisse.allSettled -> também fazemos vários pedidos em paralelo.
//Mas, se alguma delas falhar, elas não falham em paralelo. 
//Ele finaliza mostrando quais falharam e quais deram certo.

async function fetchDataFromMultipleSources() {
    try {
        console.time("Fetching data :: Promise allSettled")

        const firstCall = await fetch("https://official-joke-api.appspot.com/random_joke")
        const secondCall = await fetch("https://www.boredapi.com/api/activity")
        const thirdCall = await fetch("https://randomuser.me/api")
        const fourthCall = await fetch("https://api.ipify.org?format=json")

        const [randomJoke, boredomData, randomUser, userIp] = await Promise.allSettled([
            firstCall,
            secondCall,
            thirdCall,
            fourthCall
        ]).then(response => response.map(({ value }) => {
            if (!value.ok) return null
            console.log(value)
            return value.json()
        }))

        console.timeEnd("Fetching data :: Promise allSettled")

        return {
            randomJoke: await randomJoke,
            boredomData: await boredomData,
            randomUser: await randomUser,
            userIp: await userIp
        }
    } catch (error) {
        console.log("Error :: ", error)
    }
}

(async function () {
    const result = await fetchDataFromMultipleSources()
    console.log(result.boredomData)
})()