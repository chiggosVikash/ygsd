import ContactUs, {IContactUs} from "@/app/models/ContactUs";
import { dbConnect } from "@/app/lib/db/db_connect";

export async function createContactUs(contactUs: IContactUs){
    try{
        await dbConnect();
        const newContactUs = await ContactUs.create(contactUs);
        return newContactUs;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}