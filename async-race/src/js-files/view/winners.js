import button from '../layouts/button';

export const table = () => `
<table>
<thead>
    <tr>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Best time (seconds)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td>img</td>
        <td>Tesla</td>
        <td>1</td>
        <td>10</td>
    </tr>
    <tr>
        <td>1</td>
        <td>img</td>
        <td>Tesla</td>
        <td>1</td>
        <td>10</td>
    </tr>
</tbody>
</table>`;

export const renderWinners = (data, dataPage) => {
  const res = document.getElementById('results');
  res.innerHTML = '';
  const countWinners = document.createElement('h2');
  countWinners.innerText = `Winners (${data.length})`;
  res.append(countWinners);
  const page = document.createElement('h3');
  page.innerText = `Page (${dataPage.length})`;
  res.append(page);
  const containerTable = document.createElement('table');
  res.append(containerTable);
  containerTable.innerHTML = table();
  const prev = button('PREV');
  res.append(prev);
  const next = button('NEXT');
  res.append(next);
};
