import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: new FormControl('', { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.get('userName').value === 'Admin' && this.loginForm.get('password').value === 'Admin') {
      this.router.navigate(['/employee']);
    }

  }

}
