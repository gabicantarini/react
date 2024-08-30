import axios from "axios";

export function delay (resolveWith: unknown, ms: number){
    return new Promise((resolve) => {
        setTimeout(() => resolve(resolveWith), ms)
    })
}

export function createFetcher(delayMs?: number) {
    return async function <T>(uri:string): Promise<T>
 {
    const { data } = await axios(uri)

    return delayMs ? delay(data, delayMs) : data
 }}