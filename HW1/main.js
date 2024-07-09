const area = document.getElementById("area");
const energy = document.getElementById("energy");
const chartType = document.getElementById("chart_type");

const chartArea = document.getElementById("chartArea");
const energyDescription = document.getElementById("description");
const ctx = document.getElementById('myChart').getContext('2d');

//JSON object where the key is the value found in the select drop down of energies, has the indicator and the description of the data
const energyIndicators = {'Electric power consumption': {'indicator': 'EG.USE.ELEC.KH.PC', 'description': 'Electric power consumption per person, measured in kilowatt-hours'},
                        'Energy consumption' : {'indicator': 'EG.USE.PCAP.KG.OE', 'description': 'Energy use per person in kilograms of oil equivalent (kgoe)'}
};
function toggleMode() {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
    const button = document.getElementById('toggleModeButton');
    if (document.body.classList.contains('bg-white')) {
        button.textContent = 'Dark Mode';
    } else {
        button.textContent = 'Light Mode';
    }
}
let myChart;
const showData = () => {
    energyDescription.textContent = energyIndicators[energy.value]['description']

    const indicator = energyIndicators[energy.value]['indicator'];
   
    const apiUrl = `https://api.worldbank.org/v2/country/${area.value}/indicator/${indicator}?format=json`;
    fetch(apiUrl).then(res => {
        if (!res.ok)
            throw new Error('Network response was not ok');
        return res.json()

    }).then(response_data => {
        let options = {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        };

        let data2 = {
            labels: [response_data[1][9]['date'], response_data[1][10]['date'], response_data[1][11]['date'], response_data[1][12]['date']],
            datasets: [{
                label: energy.value,
                data: [response_data[1][9]['value'], response_data[1][10]['value'], response_data[1][11]['value'], response_data[1][12]['value']],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        };

        if (myChart)
            myChart.destroy();

        myChart = new Chart(ctx, {
            type: chartType.value,
            data: data2,
            options: options
        });
        
        chartArea.hidden = false;

    }).catch(err => console.log(err))
}