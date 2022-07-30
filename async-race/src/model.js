export default {
    async vehicleData () {
        const response = await fetch('http://127.0.0.1:3000/garage');
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
    }
}