import AppBar from '../components/AppBar';
import InputBook from '../components/InputBook';
import SearchBook from '../components/SearchBook';
import ListBook from '../components/ListBook';

const container = document.createElement('div');
container.setAttribute('class', 'container');
container.append(InputBook.init(), SearchBook.init(), ListBook.init());

const content = document.createElement('div');
content.setAttribute('id', 'content');
content.append(container);

const main = document.createElement('main');
main.append(content);

const header = document.createElement('header');
header.append(AppBar.init());

const rootElement = document.getElementById('root');
rootElement?.append(header, main);
