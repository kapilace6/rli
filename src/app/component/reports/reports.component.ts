import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  season_name: String = "Replace me with Season Name";
  track_name: String = "Replace me with Track Name";
  status: String = "";

  insertSeason(): void {
    this.usersService.insertSeason(this.season_name).subscribe(
      season => {
          this.status = "Success";
      }
    );
  }

  insertResult(mode: Number): void {
    this.usersService.insertResult(mode, this.season_name, this.track_name).subscribe(
      result => {
        this.status = "Success";
      }
    );
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}
