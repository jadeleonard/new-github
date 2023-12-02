'user server'
import { revalidatePath } from "next/cache";
import users from "../users";
import { connectToDB } from "@/lib/mongodbClient";





export async function fetchUser(userId:string) {
    try {
        connectToDB();
        return await users.findOne({id:userId});    
    } catch (error:any) {
        throw new Error(`failed to fetch user:${error.message}`);
    }
}


interface Params {
    userId: string;
    name: string;
    username: string;
    image: string;
}

export async function updateUser({userId,name,username,image}:Params):Promise<void>{
    try {
        connectToDB();
        await users.findOneAndUpdate(
            {id:userId},
            {username: username.toLowerCase(),
            name,image
            },
            {upsert:true}
        );
            if(path){
                revalidatePath(path);
            }
    } catch (error:any) {
        throw new Error(`Failed to create/update user: ${error.message}`);

    }

}




