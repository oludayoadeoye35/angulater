import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-usercard',
  imports: [CommonModule, FormsModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss',
})
export class UsercardComponent {
  @Input() user!: User;
  isEditModalOpen: boolean = false;
  editUser: User = new User({ ...this.user });

  constructor(private userService: UserService) {}

  onEdit() {
    this.editUser = new User({ ...this.user });
    this.isEditModalOpen = true;
  }

  closeModal() {
    this.isEditModalOpen = false;
  }

  saveChanges() {
    this.userService.editUserById(this.user.id, this.editUser);
    this.isEditModalOpen = false;
  }

  onDelete() {
    this.userService.deleteUser(this.user.id);
  }
}
