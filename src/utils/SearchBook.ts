const searchBooks = (event: any) => {
  const inputSearch = event.target.value.toLowerCase();
  const bookItem = document.querySelectorAll('.card');

  bookItem.forEach((item) => {
    const bookTitle = item?.firstChild?.firstChild?.textContent?.toLowerCase() as string;
    // eslint-disable-next-line eqeqeq
    if (bookTitle.indexOf(inputSearch) != -1) {
      item.setAttribute('style', 'display: flex;');
    } else {
      item.setAttribute('style', 'display: none;');
    }
  });
};

export default searchBooks;
