import model from '../model';
import Router from '../router';
import controller from '../controller';
import button from '../layouts/button';
import create from '../layouts/create';
import update from '../layouts/update';
import car from '../layouts/car';

export default {
  renderGarage(data) {
    results.innerHTML = '';
    let selectId = 0;
    //add create
    results.append(create());
    //add update
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
    results.append(containerInputUpdate);
    //add cars
    const carsList = document.createElement('div');
    results.append(carsList);

    for (let i = 0; i < data.length; i++) {
      const containerCar = document.createElement('div');

      let btnSelect = button('SELECT');
      btnSelect.id = data[i].id;

      btnSelect.addEventListener('click', () => {
        selectId = btnSelect.id;
      });

      let btnRemove = button('REMOVE');
      btnRemove.id = data[i].id;

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

    buttonUpdateCar.addEventListener('click', () => {
      model.carUpdateFromInput(carUpdateInput.value, 'color', selectId);
      Router.init();
    });

    const list = document.createElement('div');
    list.innerText = data.length;
    results.append(list);
  },

  renderWinners() {
    results.innerHTML = '';
    const results = document.createElement('div');

    const a = document.createElement('div');
    a.innerText = 'SHLYAPA';
    results.append(a);
    results.append(results);
  },
};
