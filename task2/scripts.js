

const dataTableBody = document.getElementById('dataTableBody');
const getByIdButton = document.getElementById('getByIdButton');
const dataIdInput = document.getElementById('dataId');




function applyStyles() {
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#e8e8e8';
    document.body.style.margin = '20px';

    const headings = document.querySelectorAll('h1');
    headings.forEach((h1) => {
        h1.style.textAlign = 'center';
        h1.style.color = '#444';
        h1.style.marginBottom = '20px';
    });

    const table = document.querySelector('table');
    table.style.width = '80%';
    table.style.margin = '0 auto';
    table.style.borderCollapse = 'collapse';

    const th = document.querySelectorAll('th');
    th.forEach((header) => {
        header.style.padding = '12px';
        header.style.border = '1px solid #ddd';
        header.style.backgroundColor = '#007bff';
        header.style.color = '#fff';
    });

    const td = document.querySelectorAll('td');
    td.forEach((cell) => {
        cell.style.padding = '12px';
        cell.style.border = '1px solid #ddd';
    });
}
async function fetchAndDisplayData() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        data.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            `;
            dataTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
}

// Fetch data by ID and alert the user
getByIdButton.addEventListener('click', async () => {
    const id = dataIdInput.value;
    if (!id) {
        alert('Please enter a valid ID!');
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error('Data not found');

        const data = await response.json();
        alert(`ID: ${data.id}\nTitle: ${data.title}\nBody: ${data.body}`);
    } catch (error) {
        alert('Error fetching data by ID: ' + error.message);
    }
});

applyStyles();
fetchAndDisplayData();
