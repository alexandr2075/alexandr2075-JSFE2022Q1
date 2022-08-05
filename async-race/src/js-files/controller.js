import model from './model';
import garage from './view/garage';

export default {
    async routergar() {
        const dataGarage = await model.vehicleData();
        garage.renderGarage(dataGarage);
    },
    async routerwin() {
        const dataWinner = await model.getWinners();
        garage.renderWinners();
    },
    
}