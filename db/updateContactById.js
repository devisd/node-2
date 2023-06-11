const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");

const updateContactById = async (id, name, email, phone) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, ...{ name, email, phone } };
  await updateContact(contacts);
  return contacts[idx];
};

module.exports = updateContactById;
