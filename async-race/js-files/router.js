import Controller from './controller';

function getParamsHash() {
  // eslint-disable-next-line no-restricted-globals
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');
  return { name, id };
}
function some() {
  const { name } = getParamsHash();
  const routerName = `router${name}`;
  Controller[routerName]();
}

export default {
  init() {
    // eslint-disable-next-line no-restricted-globals
    addEventListener('hashchange', some);
    some();
  },
};
