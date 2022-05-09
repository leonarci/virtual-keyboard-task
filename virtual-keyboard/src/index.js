import {
  row1, row2, row3, row4, row5,
} from './data/data';
import makeWrapper from './components/wrapper/wrapper';
import makeTextarea from './components/textarea/textarea';
import makeKeyboardBody from './components/keyboardBody/keyboardBody';
import { makeHeader, makeParagraph } from './components/text/text';
import KeyboardRow from './components/keyboardRow/keyboardRow';
import { KeyboardKey } from './components/keyboardKey/keyboardKey';
import defineKeyDown from './components/keyboardKey/defineKeyDown';
import defineKeyUp from './components/keyboardKey/defineKeyUp';
import defineKeyMouseDown from './components/keyboardKey/defineKeyMouseDown';

const wrapper = makeWrapper();
document.body.appendChild(wrapper);

const h1 = makeHeader('RSS Virtual Keyboard');
wrapper.appendChild(h1);

const textarea = makeTextarea();
wrapper.appendChild(textarea);

const keyboardBody = makeKeyboardBody();
keyboardBody.setAttribute('tabindex', '0');
wrapper.appendChild(keyboardBody);

for (let i = 1; i < 6; i += 1) {
  const keyboardRow = new KeyboardRow();
  keyboardBody.appendChild(keyboardRow.create(`keyboard-row-${i}`));
}

for (let i = 0; i < row1.length; i += 1) {
  const key = new KeyboardKey(`${row1[i][0]}`, `${row1[i][1]}`, `${row1[i][2]}`, `${row1[i][3]}`, `${row1[i][4]}`);
  document.querySelector('#keyboard-row-1').appendChild(key.create());
}
for (let i = 0; i < row2.length; i += 1) {
  const key = new KeyboardKey(`${row2[i][0]}`, `${row2[i][1]}`, `${row2[i][2]}`, `${row2[i][3]}`, `${row2[i][4]}`);
  document.querySelector('#keyboard-row-2').appendChild(key.create());
}
for (let i = 0; i < row3.length; i += 1) {
  const key = new KeyboardKey(`${row3[i][0]}`, `${row3[i][1]}`, `${row3[i][2]}`, `${row3[i][3]}`, `${row3[i][4]}`);
  document.querySelector('#keyboard-row-3').appendChild(key.create());
}
for (let i = 0; i < row4.length; i += 1) {
  const key = new KeyboardKey(`${row4[i][0]}`, `${row4[i][1]}`, `${row4[i][2]}`, `${row4[i][3]}`, `${row4[i][4]}`);
  document.querySelector('#keyboard-row-4').appendChild(key.create());
}
for (let i = 0; i < row5.length; i += 1) {
  const key = new KeyboardKey(`${row5[i][0]}`, `${row5[i][1]}`, `${row5[i][2]}`, `${row5[i][3]}`, `${row5[i][4]}`);
  document.querySelector('#keyboard-row-5').appendChild(key.create());
}

document.addEventListener('keydown', (event) => {
  defineKeyDown(event);
  const value = textarea.value.slice(0, textarea.selectionStart);
  const { length } = value;
  const newLines = value.match(/\n/g)?.length ?? 0;
  textarea.scrollTop = (Math.floor((length - newLines) / 63) + newLines - 2) * 25;
});

document.addEventListener('keyup', (event) => {
  defineKeyUp(event);
});

keyboardBody.addEventListener('mousedown', (event) => {
  defineKeyMouseDown(event);
  const value = textarea.value.slice(0, textarea.selectionStart);
  const { length } = value;
  const newLines = value.match(/\n/g)?.length ?? 0;
  textarea.scrollTop = (Math.floor((length - newLines) / 63) + newLines - 2) * 25;
  event.preventDefault();
  if (document.activeElement === textarea) textarea.focus();
});

const paragraphSystem = makeParagraph('Клавиатура создана в операционной системе Windows');
const paragraphChangeLanguage = makeParagraph('Для переключения языка комбинация: левые ctrl + alt');

wrapper.appendChild(paragraphSystem);
wrapper.appendChild(paragraphChangeLanguage);
