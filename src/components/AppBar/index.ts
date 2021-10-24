import Config from '../../config';

class AppBar {
  public static init() {
    const element = document.createElement('h1');
    element.textContent = `${Config.APP_TITLE}`;
    return element;
  }
}

export default AppBar;
