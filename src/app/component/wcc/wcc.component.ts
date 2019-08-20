import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ColumnsService } from '../../service/columns.service';
import { StatService } from '../../service/stat.service'

@Component({
  selector: 'app-wcc',
  templateUrl: './wcc.component.html',
  styleUrls: ['./wcc.component.css']
})

export class WccComponent implements OnInit {

    users: any;
    userLoaded: boolean = false;

    teams: any;
    teamsLoaded: boolean = false;

    teamsC: any;
    teamsCLoaded: boolean = false;

    //1 -> [0]
    curseason: number = 1;
    seasonsT: any;

    points: any;
    constructors: any;
    ready: boolean = false;

    constructor(private usersService: UsersService, private columnsService: ColumnsService, private statService: StatService) {
        console.log('Calling W C C');
    }

    get(): void {

        //get users from fdb, users
        //get teams from fdb, teams
        //get teamsC from fdb, teams

        this.users = this.usersService.getUsers();
        this.userLoaded = true;

        this.teams = this.usersService.getTeams();
        this.teamsLoaded = true;

        this.teamsC = this.columnsService.getTeamsC();
        this.teamsCLoaded = true;

        this.seasonsT = this.columnsService.getTables();
        this.points = this.statService.getPoints(this.curseason);

        this.constructors = this.statService.getConstructors(this.curseason);
    }

    ngOnInit() {
      this.get();
	    this.ready = true;
    }

    changeSeason(s: number): void {
	    if(this.curseason == s) return;
        this.curseason = s;
        
        this.get();
    }
}