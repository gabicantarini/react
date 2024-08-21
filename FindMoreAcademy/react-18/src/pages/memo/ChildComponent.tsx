import {memo} from "react";

type Props = {
    title: string
    add: () => void
}

//export function ChildComponent({ title, add }: Props) {
export const ChildComponent = memo(({ title, add}: Props) => {
    console.log("ChildComponent Rendered!!")
    return (
        <div className="flex justify-between gap-6 p-4 border-2 border-lime-100 rounded">
            <p>{title}</p>
            <button type="button" onClick={add} className="hover:text-lime-500">
                ADD
            </button>
        </div>
    )
})