import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public userService:UserService,
    private notification: NzNotificationService,
    public router:Router
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
 
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      const user = this.validateForm.value;
      this.userService.login(user)
      .subscribe(
        (res:HttpResponse<object>) =>{
          localStorage.setItem('authToken',res['token']);
          this.userService.setUser(res['user']);
          // this.notification.create(
          //   'success',
          //   'Registro realizado con éxito',
          //   res['message']
          //   );
          this.notification.success(
            'Login realizado con éxito',
            res['message']
            );
        },
        (error:HttpErrorResponse)=>{
          this.notification.error(
            'Problema al intentar conectarte',
            error['error']['message']
            );
        }
      )
      this.validateForm.reset();
    }
  }
}
