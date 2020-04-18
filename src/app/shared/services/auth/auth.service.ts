import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })

export class AuthService {
  constructor(public jwtHelper: JwtHelperService,private http: HttpClient,public router: Router) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    console.log("check",this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }

login(username:string,password:string):Observable<any>

{
      // we have to pass the key here 
  // here we will make a post request  to api 
 return this.http.post(`http://${environment.url}:${environment.port}/login`,{username:username,password:password});

}

logout()
{
 
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('dl');

    this.router.navigate(['/admin/signin']);


}
}