import './keyboardKey.scss';

export default class KeyboardKey {
  constructor(...params) {
    [this.keyCode, this.engCaseDown, this.engCaseUp, this.rusCaseDown, this.rusCaseUp] = params;
  }

  create() {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(this.keyCode);
    const rus = document.createElement('span');
    rus.classList.add('rus');
    key.appendChild(rus);
    const rusCaseDown = document.createElement('span');
    rusCaseDown.innerHTML = this.rusCaseDown;
    rusCaseDown.classList.add('case-down');
    const rusCaseUp = document.createElement('span');
    rusCaseUp.innerHTML = this.rusCaseUp;
    rusCaseUp.classList.add('case-up');
    rusCaseUp.classList.add('hidden');
    const eng = document.createElement('span');
    eng.classList.add('eng');
    eng.classList.add('hidden');
    key.appendChild(eng);
    const engCaseDown = document.createElement('span');
    engCaseDown.innerHTML = this.engCaseDown;
    engCaseDown.classList.add('case-down');
    const engCaseUp = document.createElement('span');
    engCaseUp.innerHTML = this.engCaseUp;
    engCaseUp.classList.add('case-up');
    engCaseUp.classList.add('hidden');
    if (this.keyCode.slice(0, 3) === 'Key') {
      rusCaseDown.classList.add('caps');
      rusCaseUp.classList.add('caps');
      engCaseDown.classList.add('caps');
      engCaseUp.classList.add('caps');
    }
    // const caps = document.createElement('span');
    // caps.innerHTML = this.rusCaseUp;
    // caps.classList.add('caps');
    // caps.classList.add('hidden');
    // const shiftCaps = document.createElement('span');
    // shiftCaps.innerHTML = this.rusCaseDown;
    // shiftCaps.classList.add('shift-caps');
    // shiftCaps.classList.add('hidden');
    rus.appendChild(rusCaseDown);
    rus.appendChild(rusCaseUp);
    eng.appendChild(engCaseDown);
    eng.appendChild(engCaseUp);
    // rus.appendChild(caps);
    // rus.appendChild(shiftCaps);

    // document.addEventListener('keydown', (event) => {
    //   if (event.code === keyCode) {
    //     key.classList.toggle('key_active');
    //     const textarea = document.querySelector('#textarea');
    //     textarea.value += keyName;
    //   }
    // });
    // document.addEventListener('keyup', (event) => {
    //   if (event.code === keyCode) {
    //     key.classList.toggle('key_active');
    //   }
    // });
    return key;
  }
}