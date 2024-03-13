export class AuthService {
  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800)
    })

    return promise;
  }

  loggin() {
    this.loggedIn = true;
  }

  loggout() {
    this.loggedIn = false;
  }
}