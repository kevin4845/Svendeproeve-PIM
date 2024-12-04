import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddUserModalComponent } from '../../modals/add-user-modal/add-user-modal.component';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(
    public dialogService: DialogService,
    private userService: UserService
  ) { }

  users$ = this.getUsers();
  users: User[] = [];

  openAddUserModal() {
    this.dialogService.open(AddUserModalComponent, {
      header: 'Add User',
      width: '70%'
    });
  }

  getUsers(): Observable<User[]> {
    return this.users$ = this.userService.getUsers().pipe(tap(res => {
      this.users = res;
    }));
  }

}
