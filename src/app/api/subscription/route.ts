import { NextRequest,NextResponse } from "next/server";
import { createSubscription} from "./controller"
import { ISubscription } from "@/app/models/Subscription";

export async function POST(req:NextRequest){
    try{
        const subscription:ISubscription=await req.json();

        await createSubscription(subscription);

        return NextResponse.json({message:"Subscription successful"},{status:200});
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"Subscription failed"},{status:500});
    }
}