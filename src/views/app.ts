import './dom';
import './controller';
import Config from '../config';
import searchBooks from '../utils/SearchBook';

// Set Title
document.title = Config.APP_TITLE;

// Handle Checkbox
const checkboxContainer = document.querySelector('.input-check');
const checkbox = checkboxContainer?.querySelector('input') as HTMLInputElement;
const label = checkboxContainer?.querySelector('label') as HTMLLabelElement;

const checkboxValidation = () => {
  if (checkbox.checked === true) {
    label.classList.add('is-check');
  } else {
    label.classList.remove('is-check');
  }
};

checkbox.addEventListener('click', checkboxValidation);

// Handle Search
const searchElement = document.getElementById('searchBook');
searchElement?.addEventListener('keyup', searchBooks);
