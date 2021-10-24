import createButton from './CreateButton';
import { undoBookFromCompleted } from '../../views/controller';

// prettier-ignore
const createUndoButton = () => createButton(
  'undo-btn',
  'Tandai Belum Selesai Dibaca',
  (event: any) => {
    undoBookFromCompleted(event.target.parentElement?.parentElement);
  }
);

export default createUndoButton;
