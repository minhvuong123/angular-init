import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  constructor(private logginService: LoggingService) {}

  updateStatus = new EventEmitter<string>();

  createAccount() {
    console.log("account service");
    this.logginService.logStatusChange("asdas");
    this.updateStatus.emit("Active")
  }
}