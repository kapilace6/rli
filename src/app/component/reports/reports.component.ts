import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  season_name: String = "Replace me with Season Name";
  track_name: String = "Replace me with Track Name";
  status: String = "";

  pin: String = "Enter 6 Digit PIN Here";
  shapin: String = "f2978ea1ceaef7962f641fec7e7a4f943a821e4a98bb81a70e21419ea839ca7b";

  insertSeason(): void {
    if(CryptoJS.SHA256(this.pin) == this.shapin) {
      this.usersService.insertSeason(this.season_name).subscribe(
        season => {
            this.status = "Success";
        }
      );
    } else {
      this.status = "Incorrect PIN";
    }
  }

  insertResult(mode: Number): void {
    if(CryptoJS.SHA256(this.pin) == this.shapin) {
      this.usersService.insertResult(mode, this.season_name, this.track_name).subscribe(
        result => {
          this.status = "Success";
        }
      );
    } else {
      this.status = "Incorrect PIN";
    }
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}
