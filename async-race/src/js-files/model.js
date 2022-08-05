import View from './view/garage';

export default {
    async vehicleData () {
        const response = await fetch('http://127.0.0.1:3000/garage?_limit=10');
        const data = await response.json()
        return data;
    },
    async getWinners () {
        const response = await fetch('http://127.0.0.1:3000/winners');
        const data = await response.json()
        return data;
    },
    async carCreationFromInput(name, color) {
        const create = await fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                color: color
            })
        });
    },
    async carUpdateFromInput(name, color, id) {
        const create = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                color: color
            })
        });
    },
    async carDelete(id) {
        const create = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
}