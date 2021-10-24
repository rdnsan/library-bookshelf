import Forms from '../Form';

class InputBook {
  public static init() {
    const title = document.createElement('h2');
    title.textContent = 'Masukan Buku Baru';

    const form = new Forms().init();

    const section = document.createElement('section');
    section.setAttribute('class', 'input-book');

    section.append(title, form);
    return section;
  }
}

export default InputBook;
