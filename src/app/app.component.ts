import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoggingService]
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'angular-first-app';
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    accountsService.updateStatus.subscribe((status: string) => {
      // alert("New Status:" + status)
    })
  }

  ngOnInit(): void {
    console.log("ngOnInit - ContentChild: ", this.paragraph)

    // const logService = new LoggingService();
    // this.loggingService.logStatusChange("asdad")
    this.accountsService.createAccount();
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - ContentChild: ", this.paragraph)
  }
}
