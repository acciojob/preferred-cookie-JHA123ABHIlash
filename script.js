const fontsize = document.querySelector('#fontsize');
const fontcolor = document.querySelector('#fontcolor');
const form = document.querySelector('form');

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    let [key, value] = cookie.trim().split('=');

    if (key === name) {
      return value;
    }
  }

  return null;
}

// Apply saved preferences on page load
window.addEventListener('load', () => {
  const savedSize = getCookie('fontsize');
  const savedColor = getCookie('fontcolor');

  if (savedSize) {
    document.documentElement.style.setProperty(
      '--fontsize',
      `${savedSize}px`
    );
    fontsize.value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty(
      '--fontcolor',
      savedColor
    );
    fontcolor.value = savedColor;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const size = fontsize.value;
  const color = fontcolor.value;

  document.cookie = `fontsize=${size}`;
  document.cookie = `fontcolor=${color}`;

  document.documentElement.style.setProperty(
    '--fontsize',
    `${size}px`
  );

  document.documentElement.style.setProperty(
    '--fontcolor',
    color
  );
});