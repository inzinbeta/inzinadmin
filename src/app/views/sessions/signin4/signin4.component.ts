import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { AuthService } from 'app/shared/services/auth/auth.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin4',
  templateUrl: './signin4.component.html',
  styleUrls: ['./signin4.component.scss'],
  animations: egretAnimations
})
export class Signin4Component implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder ,private auth:AuthService,private router:Router) {}

  ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = this.fb.group(
      {
        email: ["",[Validators.required]],
        password: password,
        
      }
    );
  }

  onSubmit() {

 //console.log(this.f.username.value,this.f.password.value);
 

    if (!this.signupForm.invalid) {
      // do what you wnat with your data

      this.auth.login(this.signupForm.value.email,this.signupForm.value.password).subscribe(data=>{
        console.log(data);
        if(data.token && data.status)
        {  
          // checking if the token is present
          // saving the token inside  localstorage
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('role', JSON.stringify(data.role));
       
          
          const tokenPayload = decode(data.token);
          console.log("payload"+JSON.stringify(tokenPayload));
        
      
            this.router.navigate(['/products/manageproducts']);
          
      
        }
        
      
      })


      console.log(this.signupForm.value.email);
    }
  }

}
