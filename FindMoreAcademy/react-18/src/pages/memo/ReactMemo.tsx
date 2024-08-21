import {useCallback, useEffect, useState} from "react";
import {ChildComponent} from "./ChildComponent.tsx";

async function fetchPostsData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        return await response.json()
    } catch(e) {
        console.log('ERROR :: ', e)
    }
}

export function ReactMemo() {
    const [count, setCount] = useState(0)

    //const add = () => setCount(prevState => prevState + 1)
    const add = useCallback(() => setCount(prevState => prevState + 1), [])

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPostsData().then(data => setPosts(data))
    }, [])

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-medium">React Memo</h1>
            <p>Count: {count}</p>
            <div className="flex flex-col gap-4">
                {
                    posts.map(({id, title}: {id: string, title: string}) => (
                        <ChildComponent key={id} title={title} add={add} />
                    ))
                }
            </div>
        </div>
    )
}