import createCheckButton from './CreateCheckButton';
import createTrashButton from './CreateTrashButton';
import createUndoButton from './CreateUndoButton';

const makeBook = (
  title: string,
  author: string,
  year: string,
  isCompleted: boolean
) => {
  const bookTitle = document.createElement('h3');
  bookTitle.innerHTML = title;

  const bookAuthor = document.createElement('p');
  bookAuthor.innerHTML = `Penulis: <span>${author}</span>`;

  const bookYear = document.createElement('p');
  bookYear.innerHTML = `Tahun: <span>${year}</span>`;

  const textContainer = document.createElement('div');
  textContainer.classList.add('book-info');
  textContainer.append(bookTitle, bookAuthor, bookYear);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('action-button');

  if (isCompleted) {
    buttonContainer.append(createUndoButton(), createTrashButton());
  } else {
    buttonContainer.append(createCheckButton(), createTrashButton());
  }

  const card = document.createElement('div');
  card.classList.add('card');
  card.append(textContainer, buttonContainer);

  return card;
};

export default makeBook;
