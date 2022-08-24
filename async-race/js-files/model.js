export default {
  async vehicleData() {
    const response = await fetch('http://127.0.0.1:3000/garage?_limit=10');
    const data = await response.json();
    return data;
  },
  async getWinners() {
    const response = await fetch('http://127.0.0.1:3000/winners');
    const data = await response.json();
    return data;
  },
  async getPage() {
    const response = await fetch('http://127.0.0.1:3000/winners?_page=2');
    const data = await response.json();
    return data;
  },
  async carCreationFromInput(name, color) {
    await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
  },
  async carUpdateFromInput(name, color, id) {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
  },
  async carDelete(id) {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
