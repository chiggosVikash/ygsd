/* eslint-disable no-unused-vars */
import {create} from "zustand";
import {IContactUs} from "@/app/models/ContactUs";
import axios from "axios";


interface ContactUsState{
    isSaving:boolean;
    isSaved:boolean;
    errorMessage:string;
    saveContactUs: (data:IContactUs)=>Promise<void>;
    reset:()=>void;
}

export const useContactUsStore = create<ContactUsState>((set)=>({
    isSaving:false,
    isSaved:false,
    errorMessage:"",
    reset:()=>{
        set({
            isSaving:false,
            isSaved:false,
            errorMessage:""
        });
    },
    saveContactUs:async(data:IContactUs)=>{
        set({isSaving:true});
        try{
            const response = await axios.post("/api/contact-us",data);
            if(response.status === 200){
                set({
                    isSaving:false,
                    isSaved:true
                });
                return;
            }
            set({
                isSaving:false,
                errorMessage:"Failed to save contact us details"
            });
        }catch(error :unknown){
            set({
                isSaving:false,
                errorMessage:`Failed to save contact us details ${error instanceof Error ? error.message : 'Unknown error'}`
            });
        }
        
    }
}));
    
    

