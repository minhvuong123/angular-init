import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { AccountsService } from './services/accounts.service';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { observable, Observable, Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { exhaustMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoggingService]
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'angular-first-app';
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor(
    private loggingService: LoggingService, 
    private accountsService: AccountsService,
    private authService: AuthService
  ) {
    accountsService.updateStatus.subscribe((status: string) => {
      // alert("New Status:" + status)
    })
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

  signupFormGroup: FormGroup;
  
  private userSub: Subscription;
  isAuthenticated = false;
  ngOnInit(): void {
    console.log("ngOnInit - ContentChild: ", this.paragraph)

    // const logService = new LoggingService();
    // this.loggingService.logStatusChange("asdad")
    this.accountsService.createAccount();

    this.signupFormGroup = new FormGroup({
      username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
      status: new FormControl('critical')
    });

    // this.signupFormGroup.valueChanges.subscribe((value) => {
    //   console.log(value)
    // })

    // this.signupFormGroup.statusChanges.subscribe((status) => {
    //   console.log(status)
    // })

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    })

    // return this.authService.user.pipe(take(1), exhaustMap(user => {
    //   return new Observable<any>((observable) => {
    //     observable.next(user);
    //   })
    // }), map(user => {
    //   return user;
    // }))
  }

  onSubmitForm(): void {
    console.log(this.signupFormGroup)
  }

  getControls(name: string) {
    const controls = (<FormArray>this.signupFormGroup.get(name)).controls;
    return controls;
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupFormGroup.get('hobbies')).push(control)
  }

  forbiddenUsernames = ['Chris', 'Anna']; // validators
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true })
        } else {
          resolve(null)
        }
      }, 1500)
    });

    return promise;
  }

  // pipe
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "small",
      name: "Test Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017)
    }
  ]

  filteredStatus = "";
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }

  stableStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("stable")
    }, 1500)
  })

  logout() {
    this.authService.logout();
  }
}
