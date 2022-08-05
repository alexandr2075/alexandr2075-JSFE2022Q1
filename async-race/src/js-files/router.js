import Controller from './controller';

function getParamsHash() {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');
  return { name, id };
}
function some() {
  const {name, id} = getParamsHash();
  const routerName = 'router' + name;
  
  Controller[routerName]();
  
}

export default {
  init() {
    addEventListener('hashchange', some);
    some();
  },
};
