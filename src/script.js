import './styles.css';
import { keys, keysFuncStatus, keysWidth } from './js/keys';
// import { enDefault, enCaps, enShifted } from './js/en';
import { enDefault } from './js/en';
// import { ruDefault, ruCaps, ruShifted } from './js/ru';
import { ruDefault } from './js/ru';

const keysPressed = new Set();

// function drawTextArea() {

// }

// createElements

let lang = localStorage.getItem('lang');
if (!lang) {
  lang = 'en';
  localStorage.setItem('lang', lang);
}
let langDefault;
// let langShifted;
// let langCaps;
if (lang === 'en') {
  langDefault = enDefault;
  // langShifted = enShifted;
  // langCaps = enCaps;
} else {
  langDefault = ruDefault;
  // langShifted = ruShifted;
  // langCaps = ruCaps;
}

function drawKeyboard() {
  // const $keyboardContainer = document.querySelector(".virtual-keyboard");
  const keyboardLayout = [14, 15, 13, 13, 9];
  let count = 0;
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  // for each row of keyboard
  keyboardLayout.forEach((rowLength) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');

    for (let i = count; i < count + rowLength; i++) {
      // Get code
      const keyCode = keys[i];

      const keyText = langDefault[keyCode];

      const funcStatus = keysFuncStatus[keyCode];
      const keyWidth = keysWidth[keyCode];

      const key = document.createElement('div');

      key.classList.add(keyCode);
      key.dataset.keycode = keyCode;

      key.classList.add('keyboard__key');

      // Check if key is pressed
      if (keysPressed.has(keyCode)) key.classList.add('active');

      if (funcStatus) key.classList.add('function-key');
      key.classList.add(keyWidth);
      key.innerHTML = keyText;
      keyboardRow.append(key);
    }
    count += rowLength;
    keyboard.append(keyboardRow);
  });
  return keyboard;
}

function init() {
  const container = document.createElement('div');
  container.classList.add('container');
  // heading
  const heading = document.createElement('h1');
  heading.innerHTML = 'Virtual Keyboard';
  heading.classList.add('heading');
  // input field
  const textArea = document.createElement('textarea');
  textArea.classList.add('input-area');
  textArea.name = 'input-area';
  textArea.cols = '50';
  textArea.rows = '10';
  // Comment
  const comment = document.createElement('p');
  comment.classList.add('comment');
  comment.innerHTML = 'Ctrl + Shift to switch language';

  // insert to dom
  document.body.append(heading);
  document.body.append(textArea);
  document.body.append(comment);

  // focus to input area
  document.querySelector('.input-area').focus();

  const keyboard = drawKeyboard();
  document.body.append(keyboard);
  // document.querySelector('.keyboard').addEventListener('click', processClick);
}

// Document.createDocumentFragment()

function processClick(event) {
  const inputArea = document.querySelector('.input-area');
  inputArea.focus();
  const eventKeyDown = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    code: event.target.dataset.keycode,
    key: langDefault[event.target.dataset.keycode],
    // target: inputArea,
    // sourceCapabilities: InputDeviceCapabilities,
    view: window,
  });
  // document.dispatchEvent(eventKeyDown);
  inputArea.dispatchEvent(eventKeyDown);

  const eventKeyUp = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    code: event.target.dataset.keycode,
    key: langDefault[event.target.dataset.keycode],
    // target: inputArea,
    // sourceCapabilities: InputDeviceCapabilities,
    view: window,
  });
  // document.dispatchEvent(eventKeyUp);
  inputArea.dispatchEvent(eventKeyUp);
}

function reDraw() {
  const keyboard = document.querySelector('.keyboard');
  const newKeyboard = drawKeyboard();
  newKeyboard.addEventListener('click', processClick);
  keyboard.replaceWith(newKeyboard);
  // document.body.append(comment);
}

function keyDown(event) {
  const keyCode = event.code;

  if (!event.repeat) {
    keysPressed.add(keyCode);
    reDraw();
  }

  if (keyCode === 'Tab') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    // set textarea value to: text before caret + tab + text after caret
    inputArea.value = `${inputArea.value.substring(0, start)}\t${inputArea.value.substring(end)}`;

    // put caret at right position again
    inputArea.selectionStart = start + 1;
    inputArea.selectionEnd = start + 1;
  }

  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
  }

  if (keyCode === 'OS') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
  }
}

function keyUp(event) {
  const key = event.code;
  keysPressed.delete(key);
  reDraw();
}

window.addEventListener('DOMContentLoaded', init());

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
// document.querySelector('.keyboard').addEventListener("click", processClick);

document.querySelector('.keyboard').addEventListener('click', processClick);
