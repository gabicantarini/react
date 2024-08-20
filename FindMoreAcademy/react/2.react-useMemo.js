//Todo.js

const Todo = ({title, description}) => {

    const computedDescription = useMemo(
        () => computeExpensiveDescription(description),
        [description]
    ) //Use case 'a' : memoizing an expensive calculation

    const MemoizedTodoChild = useMemo((
        () => <TodoChild description={description}/>
    ), [description]) //Use case 'b' : memoizing a pure component

    const properties = useMemo(() => getPropertiesFromTitle(title), [title]) //Use case 'c' : mantaining same reference of properties object

    useEffect(() => {
        console.log(
            "This side effect is called only if properties has changed: ",
            properties
        )
    }, [properties])

    return (
        <div>
            <div>Todo Title: {title}</div>
            <div>Todo Description: {description}</div>
            {MemoizedTodoChild} //Todo child is a Pure Component that should only get rerendered if descritpion has changed
        </div>
    )

}

export default Todo