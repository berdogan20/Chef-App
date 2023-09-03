import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private users: User[];
  @ViewChild('myForm', { static: false }) signinForm: NgForm;
  public incorrectPassword = false;
  public noSuchEmail = false;


  constructor(private dataService: DataService,
              private router: Router){}

  ngOnInit(): void {
    this.users = this.dataService.users;
  }

  onSubmit() {

    this.incorrectPassword = false;
    this.noSuchEmail = false;

    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    for (let user of this.users){
      if (user.mail == email){
        if (user.password == password){
          this.signinForm.reset();
          this.dataService.currentUser = user;
          this.redirectToMenu();
          return;
        }
        else{
          this.incorrectPassword = true;
          return;
        }
      }
    }  
    
    this.noSuchEmail = true;
  }

  redirectToMenu() {
    // Navigate to the sign-in page when the button is clicked
    this.router.navigate(['/menu']);
  }
}
