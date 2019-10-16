import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent{
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700, 100], label: 'PAYMENTS 2019' },]

  chartLabels = ['January', 'February', 'March', 'April', 'June'];

  onChartClick(event) {
    console.log(event);
  }

}
