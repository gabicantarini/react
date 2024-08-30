import {GithubProfiles} from "./GithubProfiles.tsx";
import {createFetcher} from "../../utils/createFetcher.ts";
import {SWRConfig} from "swr";

const fetcher = createFetcher(4000)

export function SuspenseSWR() {
    return (
        <SWRConfig
            value={{
                fetcher,
                suspense: true
            }}
            >
            <GithubProfiles />
        </SWRConfig>
    )
}