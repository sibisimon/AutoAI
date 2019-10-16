import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent{
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [12, 20, 13, 12], label: 'Account A' },]

  chartLabels = ['Regression', 'Classification', 'Deep Lrng', 'Analysisis'];

  onChartClick(event) {
    console.log(event);
  }

}
