export default function button(buttonText: string, id?: string) {
  const btn = document.createElement('button');
  btn.innerText = buttonText;
  btn.type = 'button';
  btn.id = id;
  return btn;
}
