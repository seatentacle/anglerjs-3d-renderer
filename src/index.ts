window.onload = (): void => {
  const div = document.createElement('div');
  div.innerText = 'Hello, Angler.js!';

  const root = document.getElementById('root');

  if (root) {
    root.appendChild(div);
  }
};
