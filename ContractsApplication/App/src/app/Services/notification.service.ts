import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class NotificationService {
    title = 'Mensaje del sistema';

    constructor(private toastr: ToastrService) {
    }

    success(body: string) {
        this.toastr.success(body, this.title);
   }

   error(body: string) {
        this.toastr.error( body, this.title );
   }

   info(body: string) {
        this.toastr.info(body, this.title );
   }

   warning(body: string) {
        this.toastr.warning(body, this.title);
   }
}
