import useSWR from "swr";

type Data = {
    id: number
    name: string
}

export function Repos({ user }: { user: string}) {

    const { data, isLoading } = useSWR<Data[]>(`https://api.github.com/users/${user}/repos`)

/*    if (isLoading) {
        return <>Loading repositories...</>
    }*/

    if (!data) {
        return <>There was a problem loading repositories!</>
    }

    return (
        <>
            <h2 className="text-lg">Repositories</h2>
            {data.map(({ id, name }) => (
                <p key={id}>{name}</p>
            ))}
        </>
    )
}