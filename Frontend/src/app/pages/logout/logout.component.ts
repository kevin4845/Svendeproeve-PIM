import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.post(`${environment.apiUrl}auth/logout`, {}).subscribe((res: any) => {
      this.cookieService.remove('token');
      window.location.href = '/';
    });
  }

}
