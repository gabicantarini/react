import useSWR from "swr";

type Data = {
    name: string
    avatar_url: string
}

export function User({ user }: { user: string}) {

    const { data, isLoading } = useSWR<Data>(`https://api.github.com/users/${user}`)

/*    if (isLoading) {
        return <>Loading {user}...</>
    }*/

    if (!data) {
        return <>There was a problem, please try again!</>
    }

    const { name, avatar_url } = data

    return (
        <>
            <img className="h-40 rounded-xl" src={avatar_url} alt={`${name}'s avatar`} />
            <h2 className="text-xl">{name}</h2>
        </>
    )
}