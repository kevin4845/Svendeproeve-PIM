import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent {
  constructor (
    private fb: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  password: string = '';
  repeat_password: string = '';
  token: string = this.activatedRoute.snapshot.queryParams['token'];

  form: any = this.fb.group({
    password: [''],
    repeat_password: ['']
  });

  setPassword() {
    this.http.post(`${environment.apiUrl}auth/set-password`, {
      password: this.password,
      repeat_password: this.password,
      token: this.token
    }).subscribe((res: any) => {
      this.cookieService.put('token', res.access_token);
      this.router.navigate(['/']);
    });
  }
}
