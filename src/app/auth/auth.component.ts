import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponse, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
    console.log("auth module")
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitAuth(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const passsword = form.value.passsword;

    let resultObs: Observable<AuthResponse>;

    if (this.isLoginMode) {
      resultObs = this.authService.login(email, passsword)
    } else {
      resultObs = this.authService.signup(email, passsword)
    }

    resultObs.subscribe((resData) => {
      console.log(resData)
      this.isLoading = false;
      this.router.navigate(['/users'])
    }, (error) => {
      console.log(error)
      this.isLoading = false;
    })

    form.reset();
  }
}