import './styles.css';
import { keys, keysFuncStatus, keysWidth } from './js/keys';
import { enDefault, enCaps, enShifted } from './js/en';
import { ruDefault, ruCaps, ruShifted } from './js/ru';

const keysPressed = new Set();

// setup variables
let isShifted = false;
let capsIsOn = false;

let lang = localStorage.getItem('lang');
if (!lang) {
  lang = 'en';
  localStorage.setItem('lang', lang);
}
let langDefault;
let langShifted;
let langCaps;

function setLanguage() {
  if (lang === 'en') {
    langDefault = enDefault;
    langShifted = enShifted;
    langCaps = enCaps;
  } else {
    langDefault = ruDefault;
    langShifted = ruShifted;
    langCaps = ruCaps;
  }
}

setLanguage();

function changeLanguage() {
  if (lang === 'en') {
    lang = 'ru';
  } else {
    lang = 'en';
  }
  localStorage.setItem('lang', lang);
  setLanguage();
}

// get key text by keycode
function getKeyText(keyCode) {
  let keyText;
  const funcStatus = keysFuncStatus[keyCode];
  // for functional keys
  if (funcStatus) {
    keyText = langDefault[keyCode];
    // for keys which can change when shift is pressed
  } else if (langShifted[keyCode]) {
    // if shift is pressed
    if (isShifted) {
      keyText = langShifted[keyCode];
    } else {
      keyText = langDefault[keyCode];
    }
    // for normal text
  } else if ((capsIsOn && !isShifted) || (!capsIsOn && isShifted)) {
    keyText = langCaps[keyCode];
  } else {
    keyText = langDefault[keyCode];
  }
  return keyText;
}

function drawKeyboard() {
  // const $keyboardContainer = document.querySelector(".virtual-keyboard");
  const keyboardLayout = [14, 15, 13, 13, 9];
  let count = 0;
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  // const lang = localStorage.getItem('lang');
  // for each row of keyboard
  keyboardLayout.forEach((rowLength) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');

    for (let i = count; i < count + rowLength; i++) {
      // Get code
      const keyCode = keys[i];
      // Get text
      const funcStatus = keysFuncStatus[keyCode];
      const keyWidth = keysWidth[keyCode];
      const keyText = getKeyText(keyCode);

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
  const fav = document.createElement('link');
  fav.rel = 'icon';
  document.getElementsByTagName('head')[0].append(fav);
  fav.href = './favicon.ico';

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
  if (!event.target.dataset.keycode) return;
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

function analyseKeys() {
  if ((keysPressed.has('ShiftLeft') || keysPressed.has('ShiftRight')) && (keysPressed.has('ControlLeft') || keysPressed.has('ControlRight'))) {
    changeLanguage();
  }
  if ((keysPressed.has('ShiftLeft') || keysPressed.has('ShiftRight'))) {
    isShifted = true;
  } else isShifted = false;
  if (keysPressed.has('CapsLock')) {
    capsIsOn = !capsIsOn;
  }
}

function keyDown(event) {
  const keyCode = event.code;

  if (!event.repeat) {
    keysPressed.add(keyCode);
    analyseKeys();
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
  } else if (keyCode === 'Enter') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    // set textarea value to: text before caret + New Line + text after caret
    inputArea.value = `${inputArea.value.substring(0, start)}\n${inputArea.value.substring(end)}`;
    // put caret at right position again
    inputArea.selectionStart = start + 1;
    inputArea.selectionEnd = start + 1;
  } else if (keyCode === 'Delete') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    inputArea.value = `${inputArea.value.substring(0, start)}${inputArea.value.substring(end + 1)}`;
    inputArea.selectionStart = start;
    inputArea.selectionEnd = start;
  } else if (keyCode === 'Backspace') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    inputArea.value = `${inputArea.value.substring(0, start - 1)}${inputArea.value.substring(end)}`;
    inputArea.selectionStart = start - 1;
    inputArea.selectionEnd = start - 1;
  } else if (keyCode === 'CapsLock' || keyCode === 'AltLeft' || keyCode === 'AltRight' || keyCode === 'ShiftLeft' || keyCode === 'ShiftRight' || keyCode === 'OS' || keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
  } else if (keyCode === 'ArrowLeft') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    if (isShifted) {
      inputArea.selectionStart = start - 1;
      inputArea.selectionEnd = end;
    } else {
      inputArea.selectionStart = start - 1;
      inputArea.selectionEnd = start - 1;
    }
  } else if (keyCode === 'ArrowRight') {
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    if (isShifted) {
      inputArea.selectionStart = start;
      inputArea.selectionEnd = end + 1;
    } else {
      inputArea.selectionStart = end + 1;
      inputArea.selectionEnd = end + 1;
    }
  } else if (keyCode === 'ArrowUp') {
    if (!event.isTrusted) {
      event.preventDefault();
      const inputArea = document.querySelector('.input-area');
      inputArea.focus();
      const end = inputArea.selectionEnd;
      if (isShifted) {
        inputArea.selectionStart = 0;
        inputArea.selectionEnd = end;
      } else {
        inputArea.selectionStart = 0;
        inputArea.selectionEnd = 0;
      }
    }
  } else if (keyCode === 'ArrowDown') {
    if (!event.isTrusted) {
      event.preventDefault();
      const inputArea = document.querySelector('.input-area');
      inputArea.focus();
      const start = inputArea.selectionStart;
      const len = inputArea.value.length;
      if (isShifted) {
        inputArea.selectionStart = start;
        inputArea.selectionEnd = len;
      } else {
        inputArea.selectionStart = len;
        inputArea.selectionEnd = len;
      }
    }
  } else {
    const keyText = getKeyText(keyCode);
    if (!keyText) return;
    event.preventDefault();
    const inputArea = document.querySelector('.input-area');
    inputArea.focus();
    const start = inputArea.selectionStart;
    const end = inputArea.selectionEnd;
    // set textarea value to: text before caret + Text + text after caret
    inputArea.value = `${inputArea.value.substring(0, start)}${keyText}${inputArea.value.substring(end)}`;
    // put caret at right position again
    inputArea.selectionStart = start + 1;
    inputArea.selectionEnd = start + 1;
  }
}

function keyUp(event) {
  const key = event.code;
  keysPressed.delete(key);
  analyseKeys();
  reDraw();
}

window.addEventListener('DOMContentLoaded', init());

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
// document.querySelector('.keyboard').addEventListener("click", processClick);

document.querySelector('.keyboard').addEventListener('click', processClick);
