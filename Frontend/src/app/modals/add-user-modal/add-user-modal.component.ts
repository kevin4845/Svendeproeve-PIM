import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.scss'
})
export class AddUserModalComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private roleService: RoleService
  ) { }

  roles$: Observable<any[]> = this.getRoles();
  roles: any[] = [];

  name: string = '';
  email: string = '';
  role_id: number = 0;

  form: any = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    role_id: ['', Validators.required]
  });

  addUser() {
    this.userService.addUser({
      name: this.name,
      email: this.email,
      role_id: this.role_id
    }).subscribe((res: any) => {
      console.log(res);
    });
  }

  getRoles() {
    return this.roles$ = this.roleService.getRoles().pipe(tap((res) => {
      this.roles = res;
    }))
  }

  onRoleChange(event: any) {
    console.log(event);
  }

}
