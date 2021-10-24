const alerts = (message: string) => {
  const box = document.createElement('div');
  box.classList.add('alert');

  box.innerHTML = `
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    ${message}
  `;

  return box;
};

export default alerts;
