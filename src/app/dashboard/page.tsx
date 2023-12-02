import { UserButton, UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Dashboard(){
    const { userId } = auth();
    const user = await currentUser();
    if (!user) return null;
 

    return(
        <div>

            <UserButton afterSignOutUrl="/" />
            <UserProfile />
            
        
        </div>  
    )
}