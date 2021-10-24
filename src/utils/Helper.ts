import Config from '../config';
import alerts from './Alert';
import makeBook from './modules/MakeBook';

interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  isCompleted: boolean;
}

let books: Book[] = [];

const isStorageExist = (): boolean => {
  if (typeof Storage === 'undefined') {
    alerts('Browser anda tidak mendukung local storage');
    return false;
  }
  return true;
};

const saveData = (): void => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(Config.STORAGE_KEY, parsed);
  document.dispatchEvent(new Event('ondatasaved'));
};

const loadDataFromStorage = (): void => {
  const serializedData = localStorage.getItem(Config.STORAGE_KEY) as string;
  const data = JSON.parse(serializedData);

  if (data !== null) {
    books = data;
  }

  document.dispatchEvent(new Event('ondataloaded'));
};

const updateDataToStorage = (): void => {
  if (isStorageExist()) {
    saveData();
  }
};

// prettier-ignore
const composeBookObj = ({
  title, author, year, isCompleted
}: Book): Book => ({
  id: +new Date(),
  title,
  author,
  year,
  isCompleted,
});

const findBook = (bookId: number) => {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return false;
};

const findBookIndex = (bookId: number): number => {
  let index = 0;

  for (const book of books) {
    if (book.id === bookId) {
      return index;
    }
    index += 1;
  }

  return -1;
};

const refreshDataFromBooks = (): void => {
  const listUncompleted = document.getElementById(Config.UNCOMPLETED_LIST_BOOK);
  const listCompleted = document.getElementById(Config.COMPLETED_LIST_BOOK);

  for (const book of books) {
    const newBook: any = makeBook(
      book.title,
      book.author,
      book.year,
      book.isCompleted
    );

    newBook.bookId = book.id;

    if (book.isCompleted) {
      listCompleted?.append(newBook);
    } else {
      listUncompleted?.append(newBook);
    }
  }
};

export {
  books,
  isStorageExist,
  saveData,
  loadDataFromStorage,
  updateDataToStorage,
  composeBookObj,
  findBook,
  findBookIndex,
  refreshDataFromBooks,
};
