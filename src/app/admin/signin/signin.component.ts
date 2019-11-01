import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(
    private auth: AuthService,
    private util: UtilService,
    private router: Router
  ) {
    if (this.util.getUserObject()) {
      this.router.navigateByUrl('/app');
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.min(6), Validators.required]);
  }

  createForm() {
    this.signinForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  login() {
    if (this.signinForm.valid) {
      const data = {
        email: this.email.value,
        password: this.password.value
      };

      this.auth.signIn(data)
        .then((res: any) => {
          if (res.status === 'success') {
            this.util.setUserObject(res.data);
            this.util.setToken(res.data.token);
            this.router.navigateByUrl('/app');
          }
        })
        .catch(e => {
          console.log(e);
        });

    }
  }

}
