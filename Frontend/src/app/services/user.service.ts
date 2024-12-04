import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}users`);
  }

  addUser(user: any) {
    return this.http.post(`${environment.apiUrl}users`, user);
  }

  updateUser(user: any, userId: number) {
    return this.http.post(`${environment.apiUrl}users/${userId}`, user);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${environment.apiUrl}users/${userId}`);
  }


}
