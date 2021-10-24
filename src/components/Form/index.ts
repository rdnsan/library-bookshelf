class Forms {
  inputGroup(
    htmlFor: string,
    label: string,
    inputType: string,
    name: string,
    id: string,
    required?: string
  ) {
    const div = document.createElement('div');
    div.setAttribute('class', 'input-group');

    div.innerHTML = `
      <label for="${htmlFor}">${label}</label>
      <input type="${inputType}" name="${name}" id="${id}" ${required} />
    `;
    return div;
  }

  init() {
    const judul = this.inputGroup(
      'bookTitle',
      'Judul',
      'text',
      'title',
      'bookTitle',
      'required'
    );

    const penulis = this.inputGroup(
      'bookAuthor',
      'Penulis',
      'text',
      'author',
      'bookAuthor',
      'required'
    );

    const tahun = this.inputGroup(
      'bookYear',
      'Tahun',
      'number',
      'year',
      'bookYear',
      'required'
    );

    const isCompleted = document.createElement('div');
    isCompleted.setAttribute('class', 'input-check');
    isCompleted.innerHTML = `
      <input type="checkbox" name="iscompleted" id="isCompleted" />
      <label for="isCompleted">Selesai dibaca</label>
    `;

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Masukan Buku';

    const formComponent: any[] = [judul, penulis, tahun, isCompleted, button];

    const formElement = document.createElement('form');
    formElement.setAttribute('name', 'input-book');

    formElement.append(...formComponent);
    return formElement;
  }
}

export default Forms;
