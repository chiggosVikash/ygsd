import mongoose, {Schema , Document} from "mongoose";

export interface IContactUs extends Document{
    name: string;
    email: string;
    subject: string;
    phoneNumber: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContactUsSchema: Schema<IContactUs> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    
},
{timestamps: true}
)

const ContactUs = mongoose.models.ContactUs || mongoose.model<IContactUs>("ContactUs", ContactUsSchema);

export default ContactUs;