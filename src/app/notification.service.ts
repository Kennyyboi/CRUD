import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private count = 0;
  notificationCount = new Subject<number>();

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string) {
    this.toastr.success(message);
    this.count++;
    this.notificationCount.next(this.count);
  }

  showError(message: string) {
    this.toastr.error(message);
    this.count++;
    this.notificationCount.next(this.count);
  }
}