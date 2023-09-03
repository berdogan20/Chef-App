import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService,
              private router: Router){}

  ngOnInit(): void {
  }

  redirectToMenu() {
    this.dataService.currentUser = null;
    this.router.navigate(['/menu']);
  }
}
