// script.js

// Bar Chart
const barCtx = document.getElementById('myBarChart').getContext('2d');

const myBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Sales',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('myPieChart').getContext('2d');

const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My Pie Chart',
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});


// Sample data
const patientData = [
    { name: "John Doe", id: "001", missed: 2, cancellation: 1, rescheduling: 0, engagement: "Yes", feedbacks: "No", distance: "5 km", status: "Active" },
    { name: "Jane Smith", id: "002", missed: 1, cancellation: 0, rescheduling: 2, engagement: "No", feedbacks: "Yes", distance: "12 km", status: "Inactive" },
    { name: "Emily Johnson", id: "003", missed: 0, cancellation: 2, rescheduling: 1, engagement: "Yes", feedbacks: "No", distance: "8 km", status: "Active" },
    { name: "Michael Brown", id: "004", missed: 3, cancellation: 1, rescheduling: 2, engagement: "No", feedbacks: "Yes", distance: "15 km", status: "Inactive" },
    { name: "Alice Davis", id: "005", missed: 2, cancellation: 0, rescheduling: 1, engagement: "Yes", feedbacks: "No", distance: "3 km", status: "Active" },
    { name: "Robert Wilson", id: "006", missed: 1, cancellation: 2, rescheduling: 0, engagement: "No", feedbacks: "Yes", distance: "10 km", status: "Inactive" },
    { name: "Linda Martinez", id: "007", missed: 0, cancellation: 1, rescheduling: 2, engagement: "Yes", feedbacks: "No", distance: "6 km", status: "Active" },
    { name: "David Garcia", id: "008", missed: 4, cancellation: 2, rescheduling: 0, engagement: "No", feedbacks: "Yes", distance: "20 km", status: "Inactive" },
    { name: "Jessica Thomas", id: "009", missed: 1, cancellation: 0, rescheduling: 1, engagement: "Yes", feedbacks: "No", distance: "4 km", status: "Active" },
    { name: "William Anderson", id: "010", missed: 2, cancellation: 1, rescheduling: 0, engagement: "No", feedbacks: "Yes", distance: "7 km", status: "Inactive" }
];

// Function to populate the table
function populateTable() {
    const tableBody = document.querySelector('#patientTable tbody');
    patientData.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.id}</td>
            <td>${patient.missed}</td>
            <td>${patient.cancellation}</td>
            <td>${patient.rescheduling}</td>
            <td>${patient.engagement}</td>
            <td>${patient.feedbacks}</td>
            <td>${patient.distance}</td>
            <td>${patient.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
// populateTable();
