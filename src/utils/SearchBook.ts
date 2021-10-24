const searchBooks = (event: any) => {
  const inputSearch = event.target.value;
  const bookItem = document.querySelectorAll('.card');

  bookItem.forEach((item) => {
    const bookTitle = item?.firstChild?.firstChild?.textContent?.toLocaleLowerCase() as string;

    if (bookTitle.indexOf(inputSearch) !== -1) {
      item.setAttribute('style', 'display: flex;');
    } else {
      item.setAttribute('style', 'display: none;');
    }
  });
};

export default searchBooks;
