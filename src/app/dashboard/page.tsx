import { UserButton, UserProfile } from "@clerk/nextjs";

export default function Dashboard(){
    return(
        <div>

            <UserButton afterSignOutUrl="/" />


            <UserProfile />
        </div>
    )
}