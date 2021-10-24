import Config from '../config';
import makeBook from '../utils/modules/MakeBook';
import {
  composeBookObj,
  books,
  updateDataToStorage,
  findBook,
  findBookIndex,
} from '../utils/Helper';

const addBook = (): void => {
  const uncompletedBookList = document.getElementById(Config.UNCOMPLETED_LIST_BOOK);
  const completedBookList = document.getElementById(Config.COMPLETED_LIST_BOOK);
  const inputBookTitle = document.getElementById('bookTitle') as HTMLInputElement;
  const inputBookAuthor = document.getElementById('bookAuthor') as HTMLInputElement;
  const inputBookYear = document.getElementById('bookYear') as HTMLInputElement;
  const isBookCompleted = document.getElementById('isCompleted') as HTMLInputElement;

  const book: any = makeBook(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookYear.value,
    isBookCompleted.checked
  );

  const bookObject = composeBookObj({
    id: +new Date(),
    title: inputBookTitle.value,
    author: inputBookAuthor.value,
    year: inputBookYear.value,
    isCompleted: isBookCompleted.checked,
  });

  book.bookId = bookObject.id;
  books.push(bookObject);

  if (isBookCompleted.checked) {
    completedBookList?.append(book);
  } else {
    uncompletedBookList?.append(book);
  }

  updateDataToStorage();
};

const addBookToCompleted = (bookElement: any) => {
  const listCompleted = document.getElementById(Config.COMPLETED_LIST_BOOK);
  const bookTitle = bookElement.firstChild.querySelector('h3')?.innerText;
  const bookAuthor = bookElement.firstChild.querySelector('p:first-of-type > span')?.innerText;
  const bookYear = bookElement.firstChild.querySelector('p:first-of-type > span')?.innerText;

  const newBook: any = makeBook(bookTitle, bookAuthor, bookYear, true);
  const book: any = findBook(bookElement.bookId);

  book.isCompleted = true;
  newBook.bookId = book.id;

  listCompleted?.append(newBook);
  bookElement.remove();
  updateDataToStorage();
};

const removeBook = (bookElement: any) => {
  const bookTitle = bookElement.firstChild.querySelector('h3')?.innerText;
  const confirmation = confirm(`Apakah anda yakin ingin menghapus buku ${bookTitle}?`);
  const bookPosition = findBookIndex(bookElement.bookId);

  books.splice(bookPosition, 1);

  if (confirmation) {
    bookElement.remove();
    updateDataToStorage();
  }
};

const undoBookFromCompleted = (bookElement: any) => {
  const listUncompleted = document.getElementById(Config.UNCOMPLETED_LIST_BOOK);
  const bookTitle = bookElement.firstChild.querySelector('h3')?.innerText;
  const bookAuthor = bookElement.firstChild.querySelector('p:first-of-type > span')?.innerText;
  const bookYear = bookElement.firstChild.querySelector('p:last-of-type > span')?.innerText;

  const newBook: any = makeBook(bookTitle, bookAuthor, bookYear, false);
  const book: any = findBook(bookElement.bookId);

  book.isCompleted = false;
  newBook.bookId = book.id;

  listUncompleted?.append(newBook);
  bookElement.remove();
  updateDataToStorage();
};

export {
  addBook, addBookToCompleted, removeBook, undoBookFromCompleted
};
