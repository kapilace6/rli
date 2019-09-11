import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  season_name: String = "Replace me with Season Name";
  status: String = "";

  callInsertion(season: String): void {
    this.usersService.insertSeason(season).subscribe(
      season => {
          this.status = "Success";
          
          console.log(season);
          console.log(JSON.stringify(season));
      }
    );
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}
