import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginStatusComponent implements OnInit {


  isAuthenticated: boolean = false;
  userFullName: string;

  storage: Storage = sessionStorage;
  currentUrl: string;

  constructor(
    private keycloakService: KeycloakService,  
    private router: Router) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.keycloakService.isLoggedIn().then((isLoggedIn: boolean) => {
      console.log("is logg in: " + isLoggedIn);
      this.isAuthenticated = isLoggedIn;
      this.getUserDetails();

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          console.log('Current URL:', this.currentUrl);
        }
      });
    });

    
  }

  getUserDetails() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.userFullName = this.keycloakService.getUsername();
      console.log("User name :" + this.keycloakService.getUsername());

      
        this.keycloakService.loadUserProfile().then((currentUser: KeycloakProfile) =>{
          console.log('user email:' + currentUser.email);
          this.storage.setItem('userEmail', JSON.stringify(currentUser.email));
          
        });
        
      

    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.keycloakService.logout( window.location.origin + this.currentUrl);

  }
  login() {
    
    console.log("value of redirect url:" +  window.location.origin +  this.currentUrl)
   
    this.keycloakService.login({
      
      redirectUri: window.location.origin + this.currentUrl
    });
  }
}
