import mongoose, {Schema, Document} from "mongoose";

export interface ISubscription extends Document{
    email:string;
    status:string;
    createdAt:Date;
    updatedAt:Date;
}

const SubscriptionSchema:Schema<ISubscription>= new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    status:{
        type:String,
        enum:["subscribed","unsubscribed"],
        default:"subscribed",
    }

},)

const Subscription = mongoose.models.Subscription || mongoose.model<ISubscription>("Subscription",SubscriptionSchema);

export default Subscription;