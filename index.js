// ====================================================
// YARGS LIB import
const argv = require("yargs").argv;
// ====================================================

// ====================================================
// Commander LIB import and setup
// const { Command } = require("commander");
// const program = new Command();

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();
// ====================================================

// import all api's
const contactsOperations = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);

      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }

      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      break;
    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;
    case "update":
      const updateContact = await contactsOperations.updateContactById(
        id,
        name,
        email,
        phone
      );

      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }

      console.log(updateContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// Run function invokeAction with process.argv (YARGS or COMMANDER lib's)
invokeAction(argv);

// Handle commands
// ====================================================
// Get all contacts
// invokeAction({ action: "list" });

// Get contact by id
// const id = "drsAJ4SHPYqZeG-83QTVW";
// invokeAction({ action: "get", id });

// Add new contact
// const newCon = {
//   name: "Lewis",
//   email: "levis@mail.com",
//   phone: "(555) 555-5555",
// };

// invokeAction({
//   action: "add",
//   name: newCon.name,
//   email: newCon.email,
//   phone: newCon.phone,
// });

// Remove contacts by id
// const id = "Wn1G_CXk3jKLc-qmsApLG";
// invokeAction({ action: "remove", id });

// Update contact by id
// const updId = "Wn1G_CXk3jKLc-qmsApLG";

// const newCon = {
//   name: "Lewis Mahul",
//   email: "levis@gmail.com",
//   phone: "(555) 333-3333",
// };

// invokeAction({
//   action: "update",
//   id: updId,
//   name: newCon.name,
//   email: newCon.email,
//   phone: newCon.phone,
// });
// ====================================================

// Console's Actions
// ====================================================
// # Получаем и выводим весь список контактов в виде таблицы
// node index --action list

// # Получаем контакт по id
// node index --action get --id 05olLMgyVQdWRwgKfg5J6

// # Добавялем контакт
// node index --action add --name Mango --email mango@gmail.com --phone 322-22-22

// # Обновляем контакт
// node index --action update --id 05olLMgyVQdWRwgKfg5J6 --name Cyrus Mango Jackson --email nibh@semsempererat.com --phone (501) 472-5218

// # Удаляем контакт
// node index --action remove --id qdggE76Jtbfd9eWJHrssH
// ====================================================
