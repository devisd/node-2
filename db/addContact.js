const { nanoid } = require("nanoid");
const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...{ name, email, phone } };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = addContact;
