import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute,CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'bugTracker-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl:string;
  username: string;
  loading:boolean;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    //private alertService: AlertService
  ) { }

  loginUser() {
    console.log("login");
    this.loading = true;
    localStorage.setItem('currentUser',this.username)
  //   this.authenticationService.login(this.model.username, this.model.password)
  //     .subscribe(
  //     data => {
  //       // login successful so redirect to return url
  //       this.router.navigateByUrl(this.returnUrl);
  //     },
  //     error => {
  //       // login failed so display error
  //       this.alertService.error(error);
  //       this.loading = false;
  //     });
  // }
    this.router.navigate(['/home']);
  }
ngOnInit() {
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

}

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
