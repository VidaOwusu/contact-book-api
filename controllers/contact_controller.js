import { ContactModel } from "../models/contact_model.js";

//function to add a new contact to the database
export const addContact = async (req, res, next) =>{
    try {
        console.log("request", req.body);
        const addData = await ContactModel.create(req.body);
        res.status(200).send(addData);
        
    } catch (error) {
        next(error)
    }
}

//Function to display all contacts in the database
export const getContacts = async (req, res, next)=>{
    try {
        console.log("request", req.body);
        const getData = await ContactModel.find(); 
        res.status(201).send(getData);
    } catch (error) {
        next(error)
    }
}
  
//Function to display one contact from the database
  export const getContact = async (req, res, next)=>{
    try {
      console.log("request", req.body);
      const oneContact = await ContactModel.findById(req.params.id)
      res.status(201).send(oneContact);
    } catch (error) {
      next(error);
    }
  }
  
  //Function to update one contact
  export const updateContact = async (req, res, next)=>{
    try {
      const update = req.body
      // const number = req.body.phone_number;
      // console.log("request", number);
      const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).send(updatedContact)
    } catch (error) {
      next(error);
    }
  }
  
 //Function to delete one contact from the database
  export const deleteContact = async (req, res, next)=>{
    try {
      console.log("request", req.body);
      const deletedContact = await ContactModel.findByIdAndDelete(req.params.id); 
      res.status(200).send("A contact has been deleted successfuly");
    } catch (error) {
      next(error);
    }
  }