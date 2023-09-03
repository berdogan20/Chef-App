import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private users: User[];
  @ViewChild('myForm', { static: false }) signinForm: NgForm;
  userAlreadyExists = false;

  constructor(private dataService: DataService,
              private router: Router){}

  ngOnInit(): void {
    this.users = this.dataService.users;
  }            

  onSubmit() {

    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    const address = this.signinForm.value.password;

    for (let user of this.users){
      if (user.mail == email){
        this.userAlreadyExists = true;
        return;
      }
    }  
    
    const newUser = new User(email, password, address);
    this.dataService.users.push(newUser);
    this.redirectToMenu();
  }

  redirectToMenu() {
    // Navigate to the sign-in page when the button is clicked
    this.router.navigate(['/menu']);
  }
}
