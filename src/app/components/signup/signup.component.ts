import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hide: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        fName: new FormControl('', [Validators.required]),
        lName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        dob: new FormControl('', [Validators.required]),
        admin: new FormControl(''),
        user: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])

      }
    );
  }

  onSignUp(): void {
    console.log(this.signupForm.value);

    this.auth.registerUser(this.signupForm.value).subscribe(
      response => console.log('register success', response),
      error => console.log('error', error)
    );
    this.snackBar.open('Successfully register', 'Ok', {
      duration: 2000
    });
    // this.router.navigateByUrl('login');
  }

}
