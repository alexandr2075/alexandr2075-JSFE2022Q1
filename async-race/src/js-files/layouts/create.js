import button from './button';
import model from '../model';
import Router from '../router';

export default function create() {
    const containerInputCreate = document.createElement('div');

    const carCreationInput = document.createElement('input');
    carCreationInput.id = 'inputName';
    containerInputCreate.append(carCreationInput);
    const inputCarColor = document.createElement('input');
    inputCarColor.type = 'color';
    containerInputCreate.append(inputCarColor);
    const buttonCreateCar = button('CREATE');
    containerInputCreate.append(buttonCreateCar);

    buttonCreateCar.addEventListener('click', () => {
        model.carCreationFromInput(carCreationInput.value);
        Router.init();
      })

    return containerInputCreate
}

