/* eslint-disable @typescript-eslint/ban-types */
const createButton = (
  buttonClass: string,
  buttonAttribute: string,
  eventListener: Function
) => {
  const button = document.createElement('button');

  button.classList.add(buttonClass);
  button.setAttribute('title', buttonAttribute);
  button.addEventListener('click', (event) => {
    eventListener(event);
  });

  return button;
};

export default createButton;
