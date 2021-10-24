import 'regenerator-runtime';
import './components/Head';
import './styles/app.scss';
import './views/app';
import registerSW from './utils/RegisterSW';
import { addBook } from './views/controller';
import {
  isStorageExist,
  loadDataFromStorage,
  refreshDataFromBooks,
} from './utils/Helper';

window.addEventListener('DOMContentLoaded', async () => {
  await registerSW();

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
