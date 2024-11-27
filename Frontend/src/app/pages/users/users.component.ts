import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddUserModalComponent } from '../../modals/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(public dialogService: DialogService) { }

  openAddUserModal() {
    this.dialogService.open(AddUserModalComponent, {
      header: 'Add User',
      width: '70%'
    });
  }

}
