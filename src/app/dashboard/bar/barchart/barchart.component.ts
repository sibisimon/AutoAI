import { Component, OnInit } from '@angular/core';  

@Component({  
  selector: 'app-barchart',  
  templateUrl: './barchart.component.html',  
  styleUrls: ['./barchart.component.css']  
})  
export class BarchartComponent {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'View' },
    { data: [120, 455, 100, 340], label: 'Like' },
    { data: [45, 67, 80, 50], label: 'Buy' }
  ];

  chartLabels = ['Heart-Rate', 'Body-Fat', 'Avcardo-Price', 'Back-Pain'];

  onChartClick(event) {
    console.log(event);
  }
}