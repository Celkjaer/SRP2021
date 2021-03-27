// Historiske data fra 1/1-2020 - 1/12-2020
var nvo_data = [69.85, 67.13, 63.89, 69.43, 65.53, 64.82, 64.97, 65.43, 62.84, 59.73, 57.68, 60.36]
var nda_data = [49.32, 53.27, 47.77, 48.54, 50.63, 48.92, 45.74, 45.11, 43.69, 37.60, 52.21, 52.42]
var dem_data = [240.60, 235.00, 201.30, 199.50, 186.20, 195.40, 174.90, 189.30, 162.75, 150.60, 206.50, 219.00]

// Graf for nvo
var config1 = {
			type: 'line',
			data: {
				labels: ['Dec 01', 'Nov 01', 'Okt 01', 'Sep 01', 'Aug 01', 'Jul 01', 'Jun 01', 'Maj 01', 'Apr 01', 'Mar 01', 'Feb 01', 'Jan 01'],
				datasets: [
					{
				    label: 'nvo',
				    fill: false,
				    backgroundColor: 'green',
				    borderColor: 'green',
				    data: nvo_data,
  				}
                ]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Udvikling i Nvo (1.1.2020 - 1.12.2020)'
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'dato'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'kurs (kr)'
						}
					}]
				}
			}
		};


//Graf for nda
var config2 = {
			type: 'line',
			data: {
				labels: ['Dec 01', 'Nov 01', 'Okt 01', 'Sep 01', 'Aug 01', 'Jul 01', 'Jun 01', 'Maj 01', 'Apr 01', 'Mar 01', 'Feb 01', 'Jan 01'],
				datasets: [
					{
				    label: 'nda',
				    fill: false,
				    backgroundColor: 'blue',
				    borderColor: 'blue',
				    data: nda_data,
  				}
				]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Udvikling i Nda (1.1.2020 - 1.12.2020)'
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'dato'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'kurs (kr)'
						}
					}]
				}
			}
		};


//Graf for Dem
var config3 = {
			type: 'line',
			data: {
				labels: ['Dec 01', 'Nov 01', 'Okt 01', 'Sep 01', 'Aug 01', 'Jul 01', 'Jun 01', 'Maj 01', 'Apr 01', 'Mar 01', 'Feb 01', 'Jan 01'],
				datasets: [
					{
				    label: 'dem',
				    fill: false,
				    backgroundColor: 'orange',
				    borderColor: 'orange',
				    data: dem_data,
  				}
				]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Udvikling i Dem (1.1.2020 - 1.12.2020)'
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'dato'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'kurs (kr)'
						}
					}]
				}
			}
		};


	window.onload = function() {
			var ctx3 = document.getElementById('canvas3').getContext('2d');
			window.myLine = new Chart(ctx3, config3);
      		var ctx1 = document.getElementById('canvas1').getContext('2d');
			window.myLine = new Chart(ctx1, config1);
    		var ctx2 = document.getElementById('canvas2').getContext('2d');
			window.myLine = new Chart(ctx2, config2);
		};

