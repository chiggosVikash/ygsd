import Subscription, {ISubscription} from "@/app/models/Subscription";
import { dbConnect } from "@/app/lib/db/db_connect";

export async function createSubscription(subscription:ISubscription){
    try{
        await dbConnect();
        const newSubscription=await Subscription.create(subscription);
        return newSubscription;
    }
    catch(error){
        console.log(error);
    }
}