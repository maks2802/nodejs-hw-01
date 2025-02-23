import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contact = createFakeContact();
    contacts.push(contact);
    await writeContacts(contacts);
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
