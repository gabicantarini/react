//Todo.js
//import {TodoButton} from ./components/TodoButton

import { title } from "process";

const Todo = ({title, description}) => {
    const onClickHandler = useCallback(() => {
        console.log("Todo button clicked");
    }, [title]) //Use case 'a' : Mantaining same reference of onClickHandler function

    useEffect(() => {
        console.log(
            "This side effect is only called if onClickHandler has changed"
        );
        onClickHandler();
    }, [onClickHandler])

    return(
        <div>
            <div>Todo Title: {title}</div>
            <div>Todo Description: {description}</div>
            <TodoButton onClick={onClickHandler}/> Todo Button is a Pure Component that should only get rerendered if onClickHandler has changed
        </div>
    )
}

export default Todo



// O create react app foi descontinuado e trocado pelo pnpm create vite

// react-18
// npm install
// npm run

// npm add tailwindcss postcss autoprefixer -D
// npm tailwindcss init -p