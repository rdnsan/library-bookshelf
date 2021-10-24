class ListBook {
  public static init() {
    const section = document.createElement('section');
    section.setAttribute('class', 'list-book');
    section.innerHTML = `
      <div id="uncompleted">
        <h2>Belum Selesai Dibaca</h2>
      </div>
      <div id="completed">
        <h2>Sudah Selesai Dibaca</h2>
      </div>
    `;

    return section;
  }
}

export default ListBook;
