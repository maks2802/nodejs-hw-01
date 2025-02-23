import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
      const contact = createFakeContact();
      contacts.push(contact);
    }
    await writeContacts(contacts);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
