import './style.css';
import View from './view';
import Model from './model';
import Winners from './winners';

(async () => {
    try {
        const cars = await Model.vehicleData();
        View.render(cars);
        
        const garage = document.getElementById('toGarage');
        garage.addEventListener("click", () => {
            View.render(cars);
        });
        const winner = document.getElementById('toWinner');
        winner.addEventListener("click", () => {
            Winners.render();
        });
        
    } catch (error) {
        console.error(error.message);

    }
})();



