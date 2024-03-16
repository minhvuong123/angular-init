import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { AccountsService } from './services/accounts.service';
import { NgForm } from '@angular/forms';

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

  // onSubmit(form: NgForm) {
  //   console.log("submitted", form)
  // }
  defaultQuestion = "pet";
  answer="";
  genders=['male', 'female']
  @ViewChild("form") signupForm: NgForm;
  onSubmit(form: NgForm) {
    console.log("submitted", form)
  }

  sugguestUsername() {
    // this.signupForm.setValue({
    //   userData: {
    //     username: "kiwi sugguest",
    //     email: ''
    //   },
    //   secrect: "pet",
    //   questionAnswer: "",
    //   gender:"male"
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: "kiwi sugguest",
        email: ''
      },
      secrect: "pet",
      questionAnswer: "",
      gender:"male"
    })
    this.signupForm.reset();
  }
}
