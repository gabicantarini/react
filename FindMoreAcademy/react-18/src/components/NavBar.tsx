//import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex flex-col justify-between sm:flex-row bg-lime-100 p-4">
            <span className="font-bold text-xl">React 18</span>
            <ul className="flex flex-col gap-2 sm:gap-4 sm:flex-row justify-evenly items-end">
                <li>
                    <nav>
                        1 - React Memo
                    </nav>
                </li>
                {/* <li>
                    <NavLink to="/suspense-swr" className="text-gray-800 hover:text-lime500">
                        2 - Suspense SWR
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/error-boundary" className="text-gray-800 hover:text-lime500">
                        3 - Error Boundary
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/zustand" className="text-gray-800 hover:text-lime500">
                        4 - Zustand
                    </NavLink>
                </li>
                <li>
                    <NavLink to="lazy-image" className="text-gray-800 hover:text-lime-500"> 5 - Lazy Load
                        Images</NavLink>
                </li>
                <li>
                    <NavLink to="react-window" className="text-gray-800 hover:text-lime-500"> 6 - React Window</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}