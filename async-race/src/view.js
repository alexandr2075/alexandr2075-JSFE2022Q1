

export default {
    
    buttonCreation(buttonText, id) {
        const btn = document.createElement('button');
        btn.innerText = buttonText;
        btn.type = 'button';
        btn.id = id;
        return btn;
    },
    carCreation (name) {
        const containerCar = document.createElement('div');

        containerCar.append(this.buttonCreation('SELECT'));
        containerCar.append(this.buttonCreation('REMOVE'));
        containerCar.append(this.buttonCreation('start'));
        containerCar.append(this.buttonCreation('stop'));

        const carName = document.createElement('span');
        carName.innerText = name;
        containerCar.append(carName);

        const carImg = document.createElement('img');
        carImg.classList.add('carImg');
        carImg.src = './assets/car.svg';
        containerCar.append(carImg);

        const line = document.createElement('hr');
        containerCar.append(line);
        
        return containerCar;
    },

    render(data) {
        document.body.append(this.buttonCreation('TO GARAGE', 'toGarage'));
        document.body.append(this.buttonCreation('TO WINNER', 'toWinner'));

        const containerInputCreate = document.createElement('div');
        const carCreationButton = document.createElement('input');
        document.body.append(containerInputCreate);
        containerInputCreate.append(carCreationButton);
        containerInputCreate.append(this.buttonCreation('CREATE'));
        

        const carsList = document.createElement('div');
        document.body.append(carsList);

        for(let i = 0; i < data.length; i++) {
            carsList.append(this.carCreation(data[i].name));
        }

        
        const list = document.createElement('div');
        list.innerText = data.length;
        document.body.append(list);

    }
}