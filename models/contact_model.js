import { Schema, model } from "mongoose";


const contactSchema = new Schema({
    name: {type:String},
    phone_number: {type:String},
    address: {type:String},
    email: {type:String}
}, {
    timestamps:true
});


export const ContactModel = model('contact', contactSchema);