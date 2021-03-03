import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class SharedService {
    amountResumeByContractEvent = new EventEmitter<any>();
}
