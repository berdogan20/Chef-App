import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public currentUser: User;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.currentUser = this.dataService.currentUser;
  }
}
