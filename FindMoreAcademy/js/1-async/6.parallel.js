//Promisse.all -> fazemos vários pedidos em paralelo. 
//Mas, se alguma delas falhar, todas falham.

async function fetchAndProcessData(){
    const [data1, data2, data3] = await 
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/comments")
    ]).then(Response => Response.map(
        res => res.json()
    ))

    return {
        posts: await data1,
        users: await data2,
        comments: await data3
    }
}

(async function(){
    const result = await fetchAndProcessData()
    console.log(result)
})
