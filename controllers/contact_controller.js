import { ContactModel } from "../models/contact_model.js";

//function to add a new contact to the database
export const addContact = async (req, res, next) =>{
  try {
    console.log("request", req.body);
    const newContact = await ContactModel.create(req.body)
    res.status(200).send(newContact);
  } catch (error) {
    next(error);
  }
}

//Function to get all contacts from the database
export const getContacts = async (req, res, next) =>{
  try {
    console.log("request", req.body);
    const allContacts = await ContactModel.find();
    res.status(201).send(allContacts);
  } catch (error) {
    next(error);
  }
}

//Function to get one contact from the database
export const getContact = async (req, res, next) =>{
  try {
    console.log("request", req.body);
    const oneContact = await ContactModel.findById(req.params.id);
    res.status(201).send(oneContact);
  } catch (error) {
    next(error);
  }
}

//Function to update one contact in the database
export const updateContact = async (req, res, next) =>{
  try {
     const update = req.body;
    // console.log("request", number);
    const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, update);
    res.status(201).send(updatedContact);
  } catch (error) {
    next(error);
  }
}




//Function to delete one contact in the database
export const deleteContact = async (req, res, next) =>{
  try {
    console.log("request", req.body);
    const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
    res.status(201).send("A contact has been deleted successfully");
  } catch (error) {
    next(error);
  }
}
