const keyMap = {
  'a': 'button-1',
  's': 'button-2',
  'd': 'button-3',
  'f': 'button-4',
  'g': 'button-5',
  'h': 'button-6',
  'j': 'button-7',
  'k': 'button-8',
  'l': 'button-9',
};

const sounds = {
  'a': new Audio('sounds/clap.wav'),
  's': new Audio('sounds/hihat.wav'),
  'd': new Audio('sounds/kick.wav'),
  'f': new Audio('sounds/openhat.wav'),
  'g': new Audio('sounds/boom.wav'),
  'h': new Audio('sounds/ride.wav'),
  'j': new Audio('sounds/snare.wav'),
  'k': new Audio('sounds/tom.wav'),
  'l': new Audio('sounds/tink.wav'),
};

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const id = keyMap[key]; // lowercase so Shift+A also works
  if (!id) return;

  if (sounds[key]) {
    sounds[key].currentTime = 0; // rewind so rapid hits work
    sounds[key].play();
  }

  const btn = document.getElementById(id); 
  if (!btn) return;

  btn.click();
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
});

Object.entries(keyMap).forEach(([key, id]) => {
  const btn = document.getElementById(id);
  btn.addEventListener('click', () => {
    if (sounds[key]) {
      sounds[key].currentTime = 0;
      sounds[key].play();
    }
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 150);
  });
});