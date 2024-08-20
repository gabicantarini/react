async function fetchPostData(){
    try {
        const response = await fetch
        ('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        console.log(data[0])
    } catch (error){
        console.log("Error : ", error)
    }
}

fetchPostData()

//DID NOT WORK