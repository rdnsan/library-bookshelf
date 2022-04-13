import createButton from './CreateButton';
import { addBookToCompleted } from '@views/Controller';

const createCheckButton = () =>
  createButton('check-btn', 'Tandai Sudah Dibaca', (event: any) => {
    addBookToCompleted(event.target.parentElement?.parentElement);
  });

export default createCheckButton;
