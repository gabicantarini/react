//TodoParent.js
const TodoParent = ({title, description}) => {
    const [state, toggleState] = useState(false)

    return (
        <div>
            <Todo title={title} description={description} />
            <button onClick={() => toggleState((prevState) => !prevState)}>
                Re-render parent
            </button>
        </div>
    )
}

//TodoParent.js
const Todo = ({title, description}) => {

    return (
        <div>
            <div>Todo title: {title}</div>
            <div>Todo description: {description}</div>
        </div>
    )
}

export default Reflect.memo(Todo) //Use case 'a' : memoizing a pure component