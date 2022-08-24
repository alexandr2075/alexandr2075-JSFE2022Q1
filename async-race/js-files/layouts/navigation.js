import button from './button';

function linkCreation(href) {
  const a = document.createElement('a');
  a.href = href;
  return a;
}

export default function navigation() {
  const a1 = linkCreation('#gar');
  a1.append(button('TO GARAGE', 'toGarage'));
  document.body.append(a1);

  const a2 = linkCreation('#win');
  a2.append(button('TO WINNER', 'toWinner'));
  document.body.append(a2);
}
