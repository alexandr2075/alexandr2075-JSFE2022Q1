import model from './model';
import { renderGarage } from './view/garage';
import { renderWinners } from './view/winners';

export default {
  async routergar() {
    const dataGarage = await model.vehicleData();
    renderGarage(dataGarage);
  },
  async routerwin() {
    const dataWinners = await model.getWinners();
    const dataPage = await model.getPage();
    renderWinners(dataWinners, dataPage);
  },
};
