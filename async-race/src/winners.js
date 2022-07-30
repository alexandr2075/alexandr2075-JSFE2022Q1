import View from './view';

export default {
    
    render() {
        document.body.append(View.buttonCreation('TO GARAGE'));
        document.body.append(View.buttonCreation('TO WINNER'));
    }
}