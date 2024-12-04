import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StatisticService } from '../../statistic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor (
    private statisticService: StatisticService
  ) { }

  totals$: Observable<any> = this.getTotals();
  totals: any = {};

  barChartOptions: any;
  barChartData: any;

  pieChartOptions: any;
  pieChartData: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barChartOptions = {
        plugins: {
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        },
        scales: {
            y: {

                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                  color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    this.pieChartOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
  }

  getTotals() {
    return this.statisticService.getTotals().pipe(tap(res => {
      this.totals = res;
      this.barChartData = {
        labels: ['Total Products', 'Total Variants', 'Total Product Families', 'Total Users'],
        datasets: [
            {
                data: [this.totals.totalProducts, this.totals.totalVariants, this.totals.totalProdutFamilies, this.totals.users],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
      };

      this.pieChartData = {
        labels: ['Total Products', 'Total Variants', 'Total Product Families', 'Total Users'],
        datasets: [
          {
              data: [this.totals.totalProducts, this.totals.totalVariants, this.totals.totalProdutFamilies, this.totals.users],
              backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
              borderWidth: 1
          }
        ]
      };
    }))
  }


}
