// Example data arrays
const churnData = [
    { name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' },{ name: 'John Doe', id: '001', missed: 3, cancellation: 2, rescheduling: 1, engagement: 'Yes', feedbacks: 'Yes', distance: '20 miles', status: 'Churn' }
    // Add more churn data objects
];

const noChurnData = [
    { name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' },{ name: 'Jane Smith', id: '002', missed: 0, cancellation: 0, rescheduling: 0, engagement: 'No', feedbacks: 'No', distance: '5 miles', status: 'No Churn' }
    // Add more no churn data objects
];

// Function to render rows based on data
function renderTableRows(data) {
    const tbody = document.getElementById('patientTableBody');
    tbody.innerHTML = ''; // Clear existing rows
    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
}

function churnClick() {
    document.getElementById('btn').style.left = '0';

    // Render churn data
    renderTableRows(churnData);
}

function noChurnClick() {
    document.getElementById('btn').style.left = '110px';

    // Render no churn data
    renderTableRows(noChurnData);
}

// Initialize with Churn data visible
churnClick();
