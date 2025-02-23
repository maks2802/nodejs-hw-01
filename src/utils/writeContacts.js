import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), {
      encoding: 'utf-8',
    });
    console.log('Дані записані у файл');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
