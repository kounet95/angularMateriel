import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
    this.authService=authService;
    this.router = router;
  }
  ngOnInit(): void {
  }

  login() {
    this.authService.logout();
  }
}
