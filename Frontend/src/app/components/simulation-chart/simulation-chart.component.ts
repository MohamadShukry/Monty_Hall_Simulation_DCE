import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-simulation-chart',
  templateUrl: './simulation-chart.component.html',
  styleUrls: ['./simulation-chart.component.css']
})
export class SimulationChartComponent implements OnChanges  {
  @Input() totalGames: number = 0;
  @Input() wins: number = 0;
  public chart: Chart | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalGames'] || changes['wins']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const losses = this.totalGames - this.wins;
    const labels = ['Wins', 'Losses'];
    const data = [this.wins, losses];

    if (this.chart) {
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.update();
    } else {
      this.createChart(labels, data);
    }
  }

 


  private createChart(labels: string[], data: number[]): void {
    this.chart = new Chart('MyChart', {
      type: 'doughnut' as ChartType, 

      data: {
        labels: labels,
        datasets: [{
          label: 'Game Results',
          data: data,
          backgroundColor: [
            'black',  
            'yellow',   
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            labels: {
              color: 'black'
               
            }
          },
          tooltip: {
            callbacks: {
              labelTextColor: function(context) {
                return 'white'; 
              }
            }
          }
        }
      }
    });
  }
}
