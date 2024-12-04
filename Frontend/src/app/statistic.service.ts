import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(
    private http: HttpClient
  ) { }

  getTotals() {
    return this.http.get<any>(`${environment.apiUrl}total-statistics`);
  }

}
