import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class Validators {
  static invalidName(control: FormControl): {[s: string]: boolean} {
    if (control.value === "test") {
      return { invalidName: true }
    }

    return null;
  }

  static asyncInvalidName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ invalidName: true })
        } else {
          resolve(null)
        }
      }, 1500)
    });

    return promise;
  }
}