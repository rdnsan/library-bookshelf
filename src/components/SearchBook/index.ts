class SearchBook {
  public static init() {
    const section = document.createElement('section');
    section.setAttribute('class', 'search-book');
    section.innerHTML = `
      <label for="searchBook">Cari Judul Buku</label>
      <input
        type="search"
        name="search"
        id="searchBook"
        placeholder="&#x1F50E;&#xFE0E;"
      />
    `;

    return section;
  }
}

export default SearchBook;
