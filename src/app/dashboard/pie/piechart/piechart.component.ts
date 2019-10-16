import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent{
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [10, 20, 15, 30], label: 'Account A' },]

  chartLabels = ['Regression', 'Classification', 'Deep Lrng', 'Analysisis'];

  onChartClick(event) {
    console.log(event);
  }

}
