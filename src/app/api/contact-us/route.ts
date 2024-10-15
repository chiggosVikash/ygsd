import { NextResponse,NextRequest} from "next/server";
import {IContactUs} from "@/app/models/ContactUs";
import { createContactUs } from "./controller";
// import { SendMailToTeam } from "../mail/controller";
export async function POST(req: NextRequest) {
    try{
        const contactUs: IContactUs = await req.json()
        console.log(contactUs);
        return;
        await createContactUs(contactUs);
        // console.log(contactUs);
        // await SendMailToTeam(contactUs);
        return NextResponse.json({message: "Contact form submitted successfully"}, {status: 200});
        
    }
    catch(error){
        console.log(error);
        return new NextResponse("Failed to submit contact form", {status: 500});
    }
    
    

}