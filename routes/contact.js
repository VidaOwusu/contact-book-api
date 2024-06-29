import { Router } from "express";
import { addContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/contact_controller.js";


const contactRouter = Router();

contactRouter.post('/contacts', addContact);
contactRouter.get('/contacts', getContacts);
contactRouter.get('/contacts/:id', getContact);
contactRouter.patch('/contacts/:id', updateContact);
contactRouter.delete('/contacts/:id', deleteContact);

export default contactRouter;