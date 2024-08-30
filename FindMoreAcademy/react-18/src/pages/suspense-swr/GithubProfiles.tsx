import {Suspense, useState} from "react";
import {User} from "../../components/User.tsx";
//import {Repos} from "../../components/Repos.tsx";
//import {Followers} from "../../components/Followers.tsx";

const githubUsers = ["marcklefter", "krawaller", "masak", "toshi38"]

export function GithubProfiles() {

    const [currentUser, setCurrentUser] = useState("")

    const selectUser = (user: string) => setCurrentUser(user)

    const onBack = () => setCurrentUser("")


    if (!currentUser) {
        return (
            <div className="flex gap-6">
                {githubUsers.map(user => (
                    <button
                        key={user}
                        onClick={() => selectUser(user)}
                        className="border-2 border-lime-200 rounded-xl p-2 hover:bg-lime-200 hover:text-white"
                    >
                        {user}
                    </button>
                ))}
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <button onClick={onBack} className="border-2 border-lime-200 rounded-xl p-2 hover:bg-lime-200 hover:text-white">Go Back</button>

            <div className="flex flex-col gap-2 items-center">
                <Suspense fallback={<>Loading {currentUser}...</>}>
                    <User user={currentUser} />
                </Suspense>
            </div>

            <div className="flex">
            <Suspense fallback={<>Loading additional information...</>}>
                <div className="flex flex-[0.5] flex-col">
                    
                </div>
                <div className="flex flex-[0.5] flex-col">
                   
                </div>
            </Suspense>
            </div>
        </div>
    )

/*    return (
        <div className="flex flex-col gap-6">
            <button onClick={onBack} className="border-2 border-lime-200 rounded-xl p-2 hover:bg-lime-200 hover:text-white">Go Back</button>

            <div className="flex flex-col gap-2 items-center">
                <User user={currentUser} />
            </div>

            <div className="flex">
                <div className="flex flex-[0.5] flex-col">
                    <Repos user={currentUser} />
                </div>
                <div className="flex flex-[0.5] flex-col">
                    <Followers user={currentUser} />
                </div>
            </div>
        </div>
    )*/
}