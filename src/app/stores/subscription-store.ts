import {create} from 'zustand';
import { ISubscription } from '../models/Subscription';
import axios from 'axios';

interface SubscriptionStore{
    isSaved:boolean
    isSaving:boolean
    errorMessage:string
    // eslint-disable-next-line no-unused-vars
    saveSubscription:(data:ISubscription)=>Promise<void>
    reset:()=>void
}

export const useSubscriptionStore=create<SubscriptionStore>((set)=>({
    isSaved:false,
    isSaving:false,
    errorMessage:"",
    saveSubscription:async(data:ISubscription)=>{
        set({isSaving:true})
        try{
            const response=await axios.post("/api/subscription",data)
            if(response.status===200){
                set({isSaved:true,isSaving:false})
            }
        }
        catch(error: unknown){
            set({errorMessage:`Failed to subscripe ${error instanceof Error ? error.message : 'Unknown error'}`})
        }
    },
    reset:()=>{
        set({isSaved:false,isSaving:false,errorMessage:""})
    }
}))