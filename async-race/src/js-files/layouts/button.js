export default function button(buttonText, id) {
    const btn = document.createElement('button');
    btn.innerText = buttonText;
    btn.type = 'button';
    btn.id = id;
    return btn;
  }