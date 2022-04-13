import './DOM';
import './Controller';
import searchBooks from '@utils/SearchBook';

// Handle Checkbox
const checkboxContainer = document.querySelector('.input-check');
const checkbox = checkboxContainer?.querySelector('input') as HTMLInputElement;
const label = checkboxContainer?.querySelector('label') as HTMLLabelElement;

const checkboxValidation = (): void => {
  if (checkbox.checked) {
    label.classList.add('is-check');
  } else {
    label.classList.remove('is-check');
  }
};

checkbox.addEventListener('click', checkboxValidation);

// Handle Search
const searchElement = document.getElementById('searchBook');
searchElement?.addEventListener('keyup', searchBooks);
