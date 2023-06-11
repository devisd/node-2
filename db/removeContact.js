const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContact(contacts);
  return removeContact;
};

module.exports = removeContact;
