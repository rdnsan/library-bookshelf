import 'regenerator-runtime';
import '@styles';
import '@views/App';
import registerSW from '@utils/RegisterSW';
import { addBook } from '@views/Controller';
import {
  isStorageExist,
  loadDataFromStorage,
  refreshDataFromBooks,
} from '@utils/Helper';

window.addEventListener('DOMContentLoaded', async () => {
  if (process.env.NODE_ENV !== 'development') {
    await registerSW();
  }

  const form = document.querySelector('form');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook();
    form.reset();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener('ondatasaved', () => {
  console.log('Data berhasil disimpan!');
});

document.addEventListener('ondataloaded', () => {
  refreshDataFromBooks();
});
