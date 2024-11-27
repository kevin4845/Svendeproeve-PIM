import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor (
    private fb: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  email: string = '';
  password: string = '';

  form: any = this.fb.group({
    email: [''],
    password: ['']
  });

  login() {
    this.http.post(`${environment.apiUrl}auth/login`, {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      this.cookieService.put('token', res.access_token);
      this.router.navigate(['/']);
    });
  }

}
