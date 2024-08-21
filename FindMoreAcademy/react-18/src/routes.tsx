import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: []
    }
])

//Browser router: https://reactrouter.com/en/main/start/tutorial