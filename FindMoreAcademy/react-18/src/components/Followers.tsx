import useSWR from "swr";

type Data = {
    id: number
    login: string
}

export function Followers({ user }: { user: string}) {

    const { data, isLoading } = useSWR<Data[]>(`https://api.github.com/users/${user}/followers`)

/*    if (isLoading) {
        return <>Loading followers...</>
    }*/

    if (!data) {
        return <>There was a problem loading followers!</>
    }

    return (
        <>
            <h2 className="text-lg">Followers</h2>
            {data.map(({id, login}) => (
                <p key={id}>{login}</p>
            ))}
        </>
    )
}