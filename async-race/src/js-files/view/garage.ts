import model from '../model';
import Router from '../router';
import button from '../layouts/button';
import create from '../layouts/create';

interface ICarItem {
  name: string,
  color: string,
  id: number
}

export const results = () => {
  const res = document.createElement('div');
  res.id = 'results';
  document.body.append(res);
};

export const renderGarage = (data: ICarItem[]) => {
  const res = document.getElementById('results');
  res.innerHTML = '';
  // let selectId = 0;
  // add create
  res.append(create());
  // add update
  const containerInputUpdate = document.createElement('div');
  const carUpdateInput = document.createElement('input');
  carUpdateInput.id = 'inputNewName';

  containerInputUpdate.append(carUpdateInput);
  const inputUpdateCarColor = document.createElement('input');
  inputUpdateCarColor.type = 'color';

  containerInputUpdate.append(inputUpdateCarColor);
  const buttonUpdateCar = button('UPDATE');
  buttonUpdateCar.id = 'button-update';
  containerInputUpdate.append(buttonUpdateCar);
  res.append(containerInputUpdate);

  buttonUpdateCar.addEventListener('click', () => {
    model.carUpdateFromInput(carUpdateInput.value, 'color', buttonUpdateCar.id);
    Router.init();
  });

  // add cars
  const carsList = document.createElement('div');
  res.append(carsList);

  for (let i = 0; i < Object.keys(data).length; i += 1) {
    const containerCar = document.createElement('div');

    const btnSelect = button('SELECT');
    btnSelect.id = `${data[i].id}`;

    btnSelect.addEventListener('click', () => {
      carUpdateInput.value = data[i].name;
      buttonUpdateCar.id = btnSelect.id;
    });

    const btnRemove = button('REMOVE');
    btnRemove.id = `${data[i].id}`;

    btnRemove.addEventListener('click', () => {
      model.carDelete(btnRemove.id);
      Router.init();
    });

    containerCar.append(btnSelect);
    containerCar.append(btnRemove);
    containerCar.append(button('start'));
    containerCar.append(button('stop'));

    const carName = document.createElement('span');
    carName.innerText = data[i].name;
    containerCar.append(carName);

    const carImg = document.createElement('img');
    carImg.classList.add('carImg');
    carImg.src = './assets/car.svg';
    containerCar.append(carImg);

    const line = document.createElement('hr');
    containerCar.append(line);

    carsList.append(containerCar);
  }

  const list = document.createElement('div');
  list.innerText = String(data.length);
  res.append(list);
};
