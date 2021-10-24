import createButton from './CreateButton';
import { removeBook } from '../../views/controller';

// prettier-ignore
const createTrashButton = () => createButton(
  'trash-btn',
  'Hapus Buku',
  (event: any) => {
    removeBook(event.target.parentElement?.parentElement);
  }
);

export default createTrashButton;
