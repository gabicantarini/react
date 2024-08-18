import fetch from "node-fetch"

async function getPosts(){
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/posts')
    
    return response.json()

}

async function getUsers(){
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/users')
    
    return response.json()

}

async function getComments(){
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/comments')
    
    return response.json()

}


async function performTasksSequencially(){
    try {
        const posts = await getPosts()
        const users = await getUsers()
        const comments = await getComments()

        console.log(
            "Post :: ", posts[0],
            "\nUser :: ", users[0],
            "\nComments :: ", comments[0]
        )
    } catch (error){
        console.log("Error : ", error)
    }
}

performTasksSequencially()