
/****pieChannelData*****/
const pieChannelData = {

  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100, 70],
    backgroundColor: [
      'rgb(101, 120, 155)',
      'rgb(246, 189, 22)',
      'rgb(112, 127, 218)',
      'rgb(97, 221, 170)'
    ],
    hoverOffset: 4
  }]
};


const pieChannelConfig = {
  type: 'pie',
  data: pieChannelData,
};


  var myChart = new Chart(
    document.getElementById('myChart'),
    pieChannelConfig
  );
/*****************/

/******myLineChart*****/
const DATA_COUNT = 8;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const data = {
  labels: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  datasets: [{
    data: [45, 28, 21, 34, 23, 80, 75, 92],
    fill: true,
    borderColor: '#FFB443',
    backgroundColor: 'rgba(255, 203, 165, 0.37)',
    tension: 0.5,
    pointRadius: 0,
  },
  {
    data: [99, 55, 70, 44, 50, 20, 32, 25],
    fill: true,
    borderColor: '#7C8FFF',
    backgroundColor: 'rgba(65, 86, 213, 0.76)',
    tension: 0.5,
    pointRadius: 0,
  }

  ]
};

const config = {
  type: 'line',
  data: data,
  pointStyle: 'triangle',
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart with Tick Configuration'
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
      display: false,
      },
      x: {
      display: false,}
    }
  },
};

    var myChart = new Chart(
    document.getElementById('myLineChart'),
    config
  );
/*****************/





